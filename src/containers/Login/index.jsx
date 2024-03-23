import {
  Container,
  Image,
  SecondContainer,
  Label,
  InputForms,
  SignLink
} from './styles'
import { apiCodeBurguer } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { UseUser } from '../../hooks/UserContext'
import { toast } from 'react-toastify'
import { Errors } from '../../components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {Button} from '../../components'
import LoginImage from '../../assets/Login-Image.png'
import Logo from '../../assets/Logo.png'

export function Login() {
  const { putUserData } = UseUser()

  const schema = Yup.object({
    email: Yup.string()
      .email('Digite um email válido')
      .required('Esse campo é obrigatório'),
    password: Yup.string()
      .required('Esse campo é obrigatório')
      .min(6, 'O minímo de caracteres é 6')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async infoData => {
    const { data } = await toast.promise(
      apiCodeBurguer.post('sessions', {
        email: infoData.email,
        password: infoData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja Bem Vindo ',
        error: 'Verifique seu email e senha'
      }
    )

    putUserData(data)

    setTimeout(() => {

      if(data.admin) {
        navigate('/pedidos')
      } else {
        navigate('/')
      }
    }, 2000)
  }

  const navigate = useNavigate()

  

  function goRegister() {
    navigate('/register')
  }

  return (
    <Container>
      <Image src={LoginImage} />

      <SecondContainer>
        <img src={Logo} alt="image-logo" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <InputForms
            type="email"
            {...register('email')}
            error={errors.email?.message ? true : false}
          />
          <Errors error={errors.email?.message ? true : false}>
            {errors.email?.message}
          </Errors>

          <Label>Password</Label>
          <InputForms
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <Errors>{errors.password?.message}</Errors>

          <Button
            type="submit"
            style={{ marginTop: 15, marginBottom: '13px' }}
          >
            Sign In
          </Button>
        </form>
        <SignLink>
          Não possui conta? <a onClick={goRegister}>Sign up</a>
        </SignLink>
      </SecondContainer>
    </Container>
  )
}

