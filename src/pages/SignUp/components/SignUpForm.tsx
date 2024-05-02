import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";

import { AppDispatch } from "@/redux";
import { useDispatch } from "react-redux";
import { signUp, authViaGoogle } from "@/redux/actions/auth";

import { SIGN_UP_SCHEMA } from "@/schemas/auth";
import Input from "@/components/Input";
import { SignUpData } from "@/types/auth";
import Button from "@/components/Button";
import GoogleIcon from "@/assets/icons/Google.svg";

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(SIGN_UP_SCHEMA),
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSignUp = (data: SignUpData) => dispatch(signUp(data));

  const onGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatch(authViaGoogle(tokenResponse.access_token));
    },
  });

  return (
    <motion.form
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      onSubmit={handleSubmit(onSignUp)}
      className="mt-[20px]"
    >
      <div className="md:flex items-center gap-[8px]">
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange } }) => (
            <Input
              label="First name"
              onChange={onChange}
              placeholder="Your first name"
              error={errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange } }) => (
            <Input
              label="Last name"
              onChange={onChange}
              placeholder="Your last name"
              error={errors.lastName?.message}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <Input
            type="email"
            label="Email"
            onChange={onChange}
            placeholder="Your email"
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <Input
            label="Password"
            type="password"
            onChange={onChange}
            placeholder="Your password"
            error={errors.password?.message}
          />
        )}
      />
      <div className="my-[20px] flex flex-col gap-[24px]">
        <Button type="submit" text="Sign Up" />
        <Button
          variant="outlined"
          onClick={() => onGoogleLogin()}
          leftIcon={GoogleIcon}
          text="Continue with Google"
        />
      </div>
    </motion.form>
  );
};

export default SignUpForm;
