// utils/schemas.ts
import * as yup from 'yup';

export const trainingSchema = yup.object({
  title: yup.string().required('La temática es obligatoria'),
  honorarioNacional: yup
    .number()
    .typeError('El honorario nacional es obligatorio')
    .required('El honorario nacional es obligatorio'),
  honorarioInternacional: yup
    .number()
    .typeError('El honorario internacional es obligatorio')
    .required('El honorario internacional es obligatorio'),
  date: yup
    .date()
    .typeError('La fecha es obligatoria')
    .required('La fecha es obligatoria'),
  cliente: yup.string().required('Selecciona un cliente'),
  pais: yup.string().required('Selecciona un país'),
  speaker: yup.string().required('Selecciona un speaker'),
  jornada: yup.string().required('Selecciona la jornada')
});
