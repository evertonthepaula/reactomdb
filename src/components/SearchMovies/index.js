import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spin } from 'antd';
import { Form, InputWrapper, Input, Label, Info } from './styles';
import Submit from '../../styles/components/submit';

import { moviesRequest } from '../../store/modules/movies/actions';

function SearchMovies() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      year: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      year: Yup.number(),
    }),
    onSubmit: async ({ title, year }, { setSubmitting }) => {
      setSubmitting(true);
      await dispatch(moviesRequest({ title, year }));
      setSubmitting(false);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <Label htmlFor="title">Titulo do filme</Label>
        <Input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          status={formik.errors.title}
          placeholder={
            formik.errors.title
              ? 'Campo Obrigatório'
              : 'Digite o nome do filme que deseja buscar'
          }
        />
        <Info>{formik.errors.title ? 'Valor obrigatório' : ''}</Info>
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="year">Ano de Lançamento</Label>
        <Input
          id="year"
          name="year"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.year}
          status={formik.errors.year ? 'Required' : ''}
          placeholder={
            formik.errors.year ? formik.errors.year : 'Ano de lançamento'
          }
        />
        <Info>{formik.errors.year ? 'Valor precisa ser um número' : ''}</Info>
      </InputWrapper>

      <Submit
        disabled={formik.isSubmitting}
        style={{ minWidth: '80px', height: '34px' }}
      >
        {formik.isSubmitting ? <Spin size="small" /> : 'Procurar'}
      </Submit>
    </Form>
  );
}

export default memo(SearchMovies);
