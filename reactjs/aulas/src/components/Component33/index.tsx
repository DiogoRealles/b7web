import { z } from 'zod';

const Index = () => {
  const pattern = z.object({
    // TYPES PRIMITIVE
    name: z.string(),
    age: z.number(),
    active: z.boolean(),
    today: z.date(),
    openToWork: z.boolean().optional(),

    // TYPES LITERAL
    userName: z.literal('Diogo'),

    // VALIDATION + TRANSFORMATION
    email: z.string().trim().email('E-main inválido!').toLowerCase(),

    wp_db: z.string().startsWith('wp_'),
    image_jpg: z.string().endsWith('.jpg'),

    // VALIDATION NUMBERS
    /* GT = Greater Than */
    /* GTE = Greater Than or Equals */
    /* LT = Lower Than */
    /* LTE = Lower Than or Equals */
    age18: z
      .number({
        required_error: 'Idade é obrigatória!',
        invalid_type_error: 'Idade precisa ser um número!',
      })
      .gt(17, 'Idade deve ser maior que 17 anos!')
      .int()
      .positive(),
    age_18: z.number().gte(18).int().positive(),
    image_thumb: z.number().lt(258),
    image_banner: z
      .number()
      .lte(1920, 'Imagem deve ser menor ou iual a 1920px de largura'),

    // ENUM
    fuel: z.enum(['gasoline', 'ethanol', 'diesel']),

    // UNION
    nicknameString: z.union([z.string(), z.number()]), // z.string().or(z.number()),
    nicknameNumber: z.union([z.string(), z.number()]), // z.string().or(z.number()),

    // SPLIT
    email_perfect: z.string().email(),

    email_me: z
      .string()
      .email()
      .transform((val) => val.split('@')[0].toUpperCase()),

    email_website: z
      .string()
      .email()
      .transform((val) => val.split('@')[1]),

    email_twitter: z
      .string()
      .email()
      .transform((val) => val.slice(5, 11)),

    // VALUE DEFAULT
    nickname_default: z.string().toUpperCase().default('New User #001'),

    // ARRAY - STRING
    powers_names: z.string().array(), // z.array(z.string())

    // ARRAY - STRING
    powers_nivel: z.number().array(), // z.array(z.number())
  });

  const person = z.object({
    // INTERSECTION
    employee_name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres!'),
    employee_age: z.number().min(18, 'Empregado deve ser maior de idade!'),
  });

  const employee = z.object({
    role: z.string(),
  });

  const employedPerson = z.intersection(person, employee); // person.and(employee);

  const resultPerson = employedPerson.parse({
    employee_name: 'Diogo',
    employee_age: 35,
    role: 'Front-end',
  });

  const result = pattern.parse({
    // TYPES PRIMITIVE
    name: 'Diogo',
    age: 35,
    active: false,
    today: new Date(),

    // TYPES LITERAL
    userName: 'Diogo',

    // VALIDATION + TRANSFORMATION

    // VALIDATION + TRANSFORMATION
    email: ' EXAMPLE@email.com ',

    wp_db: 'wp_portfolio',
    image_jpg: 'banner.jpg',

    // VALIDATION NUMBERS
    /* GT = Greater Then */
    /* GTE = Greater Then or Equals */
    /* LT = Lower Then */
    /* LTE = Lower Then or Equals */
    age18: 19,
    age_18: 18,
    image_thumb: 256,
    image_banner: 1919,

    // ENUM
    fuel: 'ethanol',

    // UNION
    nicknameString: 'C3PO',
    nicknameNumber: 53105,

    // SPLIT
    email_perfect: 'kelly@kelly.com',
    email_me: 'kelly@kelly.com',
    email_website: 'kelly@kelly.com',
    email_twitter: 'kelly@kelly.com',

    // DEFAULT

    // ARRAY - STRING
    powers_names: ['Water', 'Fire', 'Magic'],

    // ARRAY - NUMBER
    powers_nivel: [2, 9, 5],
  });

  console.log(result);
  console.log(resultPerson);

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 31</h1>
        <p>States</p>
      </header>

      <div className="grid place-content-center h-screen"></div>
    </section>
  );
};

export default Index;
