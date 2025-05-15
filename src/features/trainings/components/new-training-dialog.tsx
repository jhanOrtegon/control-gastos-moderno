'use client';

import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useTaskStore } from '../utils/store';
import { CustomDatePicker } from '@/components/custom/CustomDatePicker';
import { CustomSelect } from '@/components/custom/CustomSelect';
import { NumericInput } from '@/components/custom/NumericInput';
import { trainingSchema } from '../utils/schema';

type TrainingFormValues = yup.InferType<typeof trainingSchema>;

export default function NewTrainingDialog() {
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors }
  } = useForm<TrainingFormValues>({
    resolver: yupResolver(trainingSchema),
    defaultValues: {
      title: '',
      honorarioNacional: undefined,
      honorarioInternacional: undefined,
      date: undefined,
      cliente: '',
      pais: '',
      speaker: '',
      jornada: ''
    }
  });

  const addTask = useTaskStore((state) => state.addTask);

  const onSubmit = (data: TrainingFormValues) => {
    toast.success('Capacitación agregada correctamente');
    addTask(data.title, '...');
    setOpen(false);
    reset();
  };

  useEffect(() => {
    const firstError = Object.values(errors)[0];
    if (firstError && typeof firstError.message === 'string') {
      toast.error(firstError.message);
    }
  }, [errors]);

  const statusOptions = [
    { label: 'Activo', value: 'active' },
    { label: 'Inactivo', value: 'inactive' },
    { label: 'Pendiente', value: 'pending' }
  ];

  return (
    <Dialog
      open={open}
      onOpenChange={(e) => {
        if (!e) reset();
        setOpen(e);
      }}
    >
      <DialogTrigger asChild>
        <Button variant='secondary' size='sm'>
          ＋ Agregar Capacitación
        </Button>
      </DialogTrigger>

      <DialogContent
        className='sm:max-w-[625px]'
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Agregar Capacitación</DialogTitle>
          <DialogDescription>¿Qué quieres hacer hoy?</DialogDescription>
        </DialogHeader>

        <form
          id='todo-form'
          className='grid gap-x-8 gap-y-4 py-4 sm:grid-cols-2'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name='date'
            control={control}
            render={({ field }) => (
              <div>
                <CustomDatePicker
                  {...field}
                  date={field.value}
                  setDate={field.onChange}
                />
                {errors.date && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.date.message}
                  </p>
                )}
              </div>
            )}
          />

          {(
            [
              'cliente',
              'pais',
              'speaker',
              'jornada'
            ] as (keyof TrainingFormValues)[]
          ).map((name) => (
            <Controller
              key={name}
              name={name}
              control={control}
              render={({ field }) => (
                <div>
                  <CustomSelect
                    {...field}
                    value={field.value?.toString() || ''}
                    options={statusOptions}
                    placeholder={`Selecciona ${name}`}
                    className={errors[name] ? 'border-destructive' : ''}
                  />
                  {errors[name] && (
                    <p className='mt-1 text-sm text-red-500'>
                      {errors[name]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          ))}

          <div>
            <Input
              {...register('title')}
              placeholder='Escribe la temática'
              className={errors.title ? 'border-destructive' : ''}
            />
            {errors.title && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.title.message}
              </p>
            )}
          </div>

          <Controller
            name='honorarioNacional'
            control={control}
            render={({ field }) => (
              <div>
                <NumericInput
                  prefix='$'
                  value={field.value}
                  onChange={field.onChange}
                  placeholder='Digita el honorario nacional'
                  className={
                    errors.honorarioNacional ? 'border-destructive' : ''
                  }
                />
                {errors.honorarioNacional && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.honorarioNacional.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name='honorarioInternacional'
            control={control}
            render={({ field }) => (
              <div>
                <NumericInput
                  prefix='$'
                  value={field.value}
                  onChange={field.onChange}
                  placeholder='Digita el honorario internacional'
                  className={
                    errors.honorarioInternacional ? 'border-destructive' : ''
                  }
                />
                {errors.honorarioInternacional && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.honorarioInternacional.message}
                  </p>
                )}
              </div>
            )}
          />
        </form>

        <DialogFooter>
          <Button type='submit' size='sm' form='todo-form'>
            Agregar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
