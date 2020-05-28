import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';
import {
  Input,
  Label,
  Container,
  Content,
  Title,
  Text,
  Warning,
} from './styles';
import Submit from '../../styles/components/submit';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ publicKey }) {
    dispatch(signInRequest(publicKey));
  }

  return (
    <Container>
      <Content>
        <Title>
          VOCÊ AINDA NÃO TEM CREDENCIAIS VÁLIDAS PARA ACESSAR OS RECURSOS DA API
          DE FILMES
        </Title>
        <Text>
          Por favor preencha o campos do formulário com sua chave pública para
          que possamos credenciar seu acesso. Se você não sabe como conseguir
          esta chave, por favor acesse:{' '}
          <a
            href="http://www.omdbapi.com/apikey.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            OMDb API
          </a>
        </Text>

        <Formik
          initialValues={{
            publicKey: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.publicKey) {
              errors.publicKey = 'required';
            }
            return errors;
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ errors }) => (
            <Form>
              <Label htmlFor="publicKey">Chave Pública</Label>
              <Input
                type="text"
                name="publicKey"
                status={errors.publicKey}
                placeholder={
                  errors.publicKey
                    ? 'Campo Obrigatório'
                    : 'Digite sua chave pública!'
                }
              />
              <Warning>
                * Não se preocupe, sua chave pública ficara disponíveis apenas
                para o seu navegador atual.
              </Warning>
              <Submit style={{ minWidth: '80px', height: '34px', margin: 0 }}>
                Entrar
              </Submit>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
}
