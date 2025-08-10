import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Collections() {
  const navigate = useNavigate();
  const collections = [
    {
      id: 1,
      title: 'Sheherwani',
      buyPrice: 4999,
      rentPrice: 999,
      location: 'Deralakatte',
      image: '/images/sheh.jpg',
    },
    {
      id: 2,
      title: 'Jodhpuri',
      buyPrice: 8999,
      rentPrice: 1999,
      location: 'Uppala',
      image: '/images/blazzers.jpg',
    },
    {
      id: 3,
      title: 'Kurtha',
      buyPrice: 2999,
      rentPrice: 799,
      location: 'Deralakatte',
      image: '/images/kurta.jpg',
    },
    {
      id: 4,
      title: 'Wedding shoes',
      buyPrice: 2999,
      rentPrice: 699,
      location: 'Mangalore',
      image: '/images/shoes.jpg',
    },
    {
      id: 4,
      title: 'Blazzers',
      buyPrice: 2999,
      rentPrice: 699,
      location: 'Mangalore',
      image: '/images/jodh.jpg',
    },
  ];

  return (
    <>
      <style>{`
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <section className="py-12 px-4 max-w-6xl mx-auto min-h-[37.5rem]">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {collections.map(({ id, title, image, buyPrice, rentPrice, location }) => (
            <motion.div
              key={id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={image}
                alt={title}
                className="w-full aspect-square sm:h-[28rem] sm:aspect-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center font-playfair">{title}</h3>

                <p className="text-center text-red-700 font-bold mt-2">
                  Buy Price: ₹{buyPrice.toLocaleString()}
                </p>
                <p className="text-center text-green-700 font-bold">
                  Rent Price: ₹{rentPrice.toLocaleString()}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4 items-center">
                  <button
                    type="button"
                    style={{ backgroundColor: '#8a6c1a' }}
                    className="text-white py-2 rounded font-semibold hover:bg-[#a8324b] transition"
                    onClick={() => navigate(`/collections/${id}`)}
                  >
                    View Product
                  </button>
                  <p className="text-center text-gray-700 font-medium">{location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
