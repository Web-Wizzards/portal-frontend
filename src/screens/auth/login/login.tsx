import { useForm } from "react-hook-form";

type LoginProps = {

}
const Login:React.FC<LoginProps> = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="login-container">
          
    </div>
  )
}

export default Login