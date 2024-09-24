import z from 'zod';

export const usersSchema = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório!',
    })
    .min(2),
  email: z
    .string({
      required_error: 'E-mail é obrigatório!',
    })
    .email(),
  age: z
    .number({
      required_error: 'Idade é obrigatória!',
      invalid_type_error: 'Idade precisa ser um número inteiro!',
    })
    .min(18, 'Precisa ser maior de 17 anos!')
    .max(120),
});
