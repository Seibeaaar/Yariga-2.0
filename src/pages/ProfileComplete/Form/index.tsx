import { Controller, Resolver, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import { ONBOARDING_ROLE_OPTIONS } from "@/constants/profile";
import Input from "@/components/Input";
import ForwardedRefInput from "@/components/ForwardedInput";
import { InputMask } from "@react-input/mask";
import ProfileRoleCard from "./components/ProfileRoleCard";
import { PROFILE_COMPLETE_SCHEMA } from "@/schemas/auth";
import { USER_ROLE } from "@/types/profile";
import { ProfileCompletionRequest } from "@/types/auth";
import { useDispatch, useSelector } from "react-redux";
import { completeProfile } from "@/redux/actions/profile";
import { AppDispatch, RootState } from "@/redux";
import Loader from "@/components/Loader";

const ProfileCompletionForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileCompletionRequest>({
    defaultValues: {
      dateOfBirth: "",
      taxNumber: "",
    },
    resolver: yupResolver(
      PROFILE_COMPLETE_SCHEMA,
    ) as Resolver<ProfileCompletionRequest>,
  });
  const roleValue = useWatch({
    control,
    name: "role",
  });

  const { profileCompletePending } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: ProfileCompletionRequest) => {
    if (data.role === USER_ROLE.Tenant) {
      delete data.taxNumber;
    }
    dispatch(completeProfile(data));
  };

  return (
    <>
      {profileCompletePending ? <Loader /> : null}
      <section className="lg:w-1/2 md:w-2/3 w-full px-[24px] md:px-0 h-full flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="sm:w-2/3 w-full">
          <div>
            <p className="text-xl font-medium mb-[16px]">
              Your main goal in Yariga is:
            </p>
            <Controller
              name="role"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="flex flex-col md:flex-row items-stretch gap-[16px]">
                  {ONBOARDING_ROLE_OPTIONS.map((option) => (
                    <ProfileRoleCard
                      key={option.role}
                      option={option}
                      isSelected={option.role === value}
                      onSelect={() => onChange(option.role)}
                    />
                  ))}
                </div>
              )}
            />
          </div>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                type="date"
                value={value}
                label="Date of birth"
                error={errors.dateOfBirth?.message}
              />
            )}
          />
          {roleValue === USER_ROLE.Landlord ? (
            <Controller
              name="taxNumber"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <InputMask
                    mask="__-_______"
                    component={ForwardedRefInput}
                    replacement={{ _: /\d/ }}
                    label="Tax ID (United States)"
                    onChange={onChange}
                    placeholder="Your tax number (EIN)"
                    value={value}
                    error={errors.taxNumber?.message}
                    showMask
                  />
                );
              }}
            />
          ) : null}
          <Button type="submit" className="mt-[24px]" text="Next" />
        </form>
      </section>
    </>
  );
};

export default ProfileCompletionForm;