import z from 'zod';

// 1.0 - schema string
const schemaString = z.string().min(2).max(35);

// 1.1 - tipo string
const dataString = 'Diogo';

// 1.3 - parse
const resultString = schemaString.parse(dataString);
// console.log(resultString);

// 2.0 - schema number
const schemaNumber = z.number();

// 2.1 - tipo number
const dataNumber = 35;

// 3.0 - schema boolean
const schemaBoolean = z.boolean();

// 3.1 - tipo boolean
const dataBoolean = true;

// 4.0 - schema object
const schemaObject = z.object({
  name: z.string().toUpperCase().min(2),
  role: z.literal('Front-end'),
  email: z.string().email('E-mail inválido!').trim(),
  age: z
    .number({
      required_error: 'Idade é obrigatória!',
      invalid_type_error: 'Idade precisa ser um número inteiro!',
    })
    .min(18, 'Precisa ser maior de idade')
    .max(120)
    .int(),
  status: z.boolean(),
  hobbies: z.array(z.string()),
  portfolio: z.string().url(),
  avatar: z.string().endsWith('.jpg'),
  skills: z.enum(['UX UI Design', 'Front-end', 'Back-end']),
  phone: z.union([z.string(), z.number()]), //z.string().or(z.number()),
});

// 4.3 typing
type TPerson = z.infer<typeof schemaObject>;

// 4.1 - tipo object
const dataObject: TPerson = {
  name: 'Diogo',
  role: 'Front-end',
  email: 'diogo@realles.com',
  age: 35,
  status: true,
  hobbies: ['Watch', 'Cook', 'Design'],
  portfolio: 'http://diogorealles.github.io',
  avatar: 'avatar.jpg',
  skills: 'UX UI Design',
  phone: '(11) 98765-4321',
};

// 4.2 - parse
const resultParse = schemaObject.parse(dataObject);
try {
  console.log(resultParse);
} catch (error) {
  console.log('[ERROR]', error);
}

// 4.2 - safeParse
// const resultSafeParse = schemaObject.safeParse(dataObject);
// if (resultSafeParse) {
//   console.log(resultSafeParse.data);
// } else {
//   console.log('[ERROR], Try agai later');
// }
