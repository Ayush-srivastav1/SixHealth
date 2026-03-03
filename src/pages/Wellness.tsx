import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { categoryHubs, signaturePrograms } from '@/data/wellnessPageContent';

const WellnessPage: React.FC = () => {
  return (
    <Layout>
      <div className='bg-white min-h-screen text-gray-900'>
        <div className='container py-12'>
          <h1 className='text-4xl font-bold mb-2'>Wellness Topics</h1>
          <p className='text-gray-600 mb-12'>Explore our comprehensive collection of health and wellness resources.</p>

          {}
          <section className='mb-16'>
            <h2 className='text-2xl font-bold mb-6'>Category Hubs</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {categoryHubs.map((hub) => (
                <Link
                  key={hub.name}
                  to={hub.href}
                  className='p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group'
                >
                  <div className='font-semibold text-sm group-hover:text-blue-600'>{hub.name}</div>
                  <div className='text-xs text-gray-600 mt-2'>{hub.description}</div>
                </Link>
              ))}
            </div>
          </section>

          {}
          <section>
            <h2 className='text-2xl font-bold mb-6'>Signature Programs</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {signaturePrograms.map((program) => (
                <Link
                  key={program.name}
                  to={program.href}
                  className='p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group'
                >
                  <div className='font-semibold text-sm group-hover:text-blue-600'>{program.name}</div>
                  <div className='text-xs text-gray-600 mt-2'>{program.description}</div>
                </Link>
              ))}
            </div>
          </section>

          {}
          <section className='mt-16 pt-12 border-t border-gray-200'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>Health & Wellness Blog</h2>
              <p className='text-gray-600 mb-6'>Read in-depth articles on health topics backed by evidence and expert research.</p>
              <Link
                to='/blog'
                className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold'
              >
                Explore Our Blog
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default WellnessPage;
