import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { resetPassword } from "../redux/AuthSlice.js";
import { toast } from "react-toastify";

const ResetPass = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { oldPassword, newPassword } = data;
    dispatch(resetPassword({ oldPassword, newPassword }));
    toast.success("Password resetted");
    reset()
  };

  const newPassword = watch("newPassword");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
    
      <div className="flex flex-col">
        <label htmlFor="oldPassword" className="font-base text-sm">
          Old Password: <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          id="oldPassword"
          {...register("oldPassword", { required: "Old password is required" })}
          className="mt-2 p-2 border border-gray-300 w-full"
        />
        {errors.oldPassword && (
          <p className="text-red-600 text-sm">{errors.oldPassword.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="newPassword" className="font-base text-sm">
          New Password: <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          id="newPassword"
          {...register("newPassword", {
            required: "New password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 6 characters long",
            },
          })}
          className="mt-2 p-2 border border-gray-300 w-full"
        />
        {errors.newPassword && (
          <p className="text-red-600 text-sm">{errors.newPassword.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="font-base text-sm">
          Confirm Password: <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === newPassword || "Passwords do not match",
          })}
          className="mt-2 p-2 border border-gray-300 w-full"
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 w-20 bg-gray-500 text-white py-2 px-4 hover:bg-black hover:text-white"
      >
        Submit
      </button>

      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </form>
  );
};

export default ResetPass;
