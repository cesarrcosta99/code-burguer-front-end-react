import { useForm } from 'react-hook-form'
import {
  Container,
  Image,
  SecondContainer,
  Label,
  InputForms,
  SignLink,
  Errors
} from './styles'
import RegisterImage from '../../assets/Imagem-Register.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { apiCodeBurguer } from '../../services/api'
import Logo from '../../assets/Logo.png'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {Button} from '../../components'

export function Register() {
  const schema = Yup.object({
    name: Yup.string().required('Seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
    confirmPassword: Yup.string()
      .required('A confirmação de senha é obrigatória')
      .oneOf([Yup.ref('password')], 'Digite a mesma senha')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    try {
      const { status } = await apiCodeBurguer.post(
        'users',
        {
          name: data.name,
          email: data.email,
          password: data.password
        },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('Cadastro Realizado com Sucesso')
      } else if (status === 409) {
        toast.error('Esse Email já existe')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Erro no Servidor.Tente Novamente!')
    }
  }

  const navigate=useNavigate()

  function goLogin(){
    navigate("/login")
  }

  return (
    <Container>
      <Image src={RegisterImage} alt="imagem" />

      <SecondContainer>
        <img src={Logo} alt="logo-image" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <InputForms {...register('name')} error={errors.name?.message} />
          <Errors>{errors.name?.message}</Errors>

          <Label>Email</Label>
          <InputForms
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <Errors>{errors.email?.message}</Errors>

          <Label>Senha</Label>
          <InputForms
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <Errors>{errors.password?.message}</Errors>

          <Label>Confirmar Senha</Label>
          <InputForms
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <Errors>{errors.confirmPassword?.message}</Errors>

          <Button type="submit" style={{ marginTop: 6, marginBottom: 13 }}>
            Sign Up
          </Button>
        </form>

        <SignLink>
          Já possui conta? <a onClick={goLogin}>Sign In</a>{' '}
        </SignLink>
      </SecondContainer>
    </Container>
  )
}
