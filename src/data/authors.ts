import { Author } from '../types';

export const AUTHORS: Record<'clara' | 'sofia', Author> = {
  clara: {
    name: 'Clara Morales',
    role: 'Diseñadora de Amigurumis y Fundadora',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    bio: 'Tejedora autodidacta desde 2015. Apasionada por transformar madejas de algodón en pequeños personajes con alma propia y enseñar sin tecnicismos complejos.'
  },
  sofia: {
    name: 'Sofía Vega',
    role: 'Especialista en Ropa a Ganchillo y Fibras',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    bio: 'Patronista textil y amante del ganchillo moderno. Cree en la moda lenta, las prendas hechas a mano que duran décadas y el poder relajante de cada vuelta.'
  }
};
