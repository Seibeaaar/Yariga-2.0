import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { login } from "@/redux/actions/auth";
import { AppDispatch } from "@/redux";

import { LOGIN_SCHEMA } from "@/schemas/auth";
import Input from "@/components/Input";
import { LoginData } from "@/types/auth";
import Button from "@/components/Button";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LOGIN_SCHEMA),
  });
  const dispatch = useDispatch<AppDispatch>();

  const onLogin = (data: LoginData) => dispatch(login(data));

  return (
    <motion.form
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      onSubmit={handleSubmit(onLogin)}
      className="mt-[20px]"
    >
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
      <div className="my-[20px]">
        <Button type="submit" text="Login" />
      </div>
    </motion.form>
  );
};

export default LoginForm;
