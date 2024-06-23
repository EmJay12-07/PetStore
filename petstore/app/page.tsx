"use client"
import { useState } from 'react';
import Pets from '@/components/Pets';
import Foods from '@/components/Food';
import Toy from '@/components/Toy';

const TabComponent = () => {
  const [tab, setTab] = useState('tab1');

  return (
    <section>
      <div className="pt-10 mt-10 items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
        <div className="justify-center w-full lg:p-10 mx-auto">
          <div>
            <ul className="grid grid-cols-3 mx-auto text-sm text-center text-black border-b">
              <li className="-mb-px w-full">
                <a
                  href="#"
                  onClick={() => setTab('tab1')}
                  className={`inline-block py-2 font-medium border-b-2 px-6 w-full border-transparent ${tab === 'tab1' ? 'bg-white text-blue-500 border-blue-500' : ''
                    }`}
                >
                  Pets

                </a>
              </li>
              <li className="-mb-px w-full">
                <a
                  href="#"
                  onClick={() => setTab('tab2')}
                  className={`inline-block py-2 font-medium border-b-2 px-6 w-full border-transparent ${tab === 'tab2' ? 'bg-white text-blue-500 border-blue-500' : ''
                    }`}
                >
                  Pet Foods
                </a>
              </li>
              <li className="-mb-px w-full">
                <a
                  href="#"
                  onClick={() => setTab('tab3')}
                  className={`inline-block py-2 font-medium border-b-2 px-6 w-full border-transparent ${tab === 'tab3' ? 'bg-white text-blue-500 border-blue-500' : ''
                    }`}
                >
                  Pet Toys
                </a>
              </li>
            </ul>
            <div className="py-4 pt-4 text-left bg-white content">
              <div style={{ display: tab === 'tab1' ? 'block' : 'none' }}>
                <main>
                  <div className="py-4">
                    <span className="inline-flex items-center text-black">
                      <span className="font-mono text-sm" aria-hidden="true">
                        01
                      </span>
                      <span className="ml-3 h-3.5 w-px bg-black"></span>
                      <span className="ml-3 text-base font-medium tracking-tight">
                        <Pets />
                      </span>
                    </span>
                    <div className="h-32 border border-gray-200 border-dashed rounded-lg"></div>
                  </div>
                </main>
              </div>
              <div style={{ display: tab === 'tab2' ? 'block' : 'none' }}>
                <main>
                  <div className="py-4">
                    <span className="inline-flex items-center text-black">
                      <span className="font-mono text-sm" aria-hidden="true">
                        02
                      </span>
                      <span className="ml-3 h-3.5 w-px bg-black"></span>
                      <span className="ml-3 text-base font-medium tracking-tight">
                        <Foods />
                      </span>
                    </span>
                    <div className="h-32 border border-gray-200 border-dashed rounded-lg"></div>
                  </div>
                </main>
              </div>
              <div style={{ display: tab === 'tab3' ? 'block' : 'none' }}>
                <main>
                  <div className="py-4">
                    <span className="inline-flex items-center text-black">
                      <span className="font-mono text-sm" aria-hidden="true">
                        03
                      </span>
                      <span className="ml-3 h-3.5 w-px bg-black"></span>
                      <span className="ml-3 text-base font-medium tracking-tight">
                        <Toy />
                      </span>
                    </span>
                    <div className="h-32 border border-gray-200 border-dashed rounded-lg"></div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabComponent;
