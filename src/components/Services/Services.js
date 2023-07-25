import React from 'react';

function Services() {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">Duo assum utroque appetere an</h2>
            <p className="text-gray-600">
              Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero
              malorum. Et sea iudico consequat, est sanctus adipisci ex.
            </p>
          </div>


          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 rounded shadow-2xl  hover:text-white bg-gray-50 hover:bg-sky-500">
                <p>
                  An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec
                  democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius
                  populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                  <div>
                    <p className="text-lg font-semibold">IT SUPPORT</p>
                    <p className="text-sm text-gray-600">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded shadow-2xl  hover:text-white hover:bg-sky-500  bg-gray-50">
                <p>
                  An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec
                  democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius
                  populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.
                </p>
                <div className="flex items-center mt-4 space-x-">
                  <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                  <div>
                    <p className="text-lg font-semibold">Graphics Design</p>
                    <p className="text-sm text-gray-600">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded shadow-2xl  hover:text-white bg-gray-50  hover:bg-sky-500 ">
                <p>
                  An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec
                  democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius
                  populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                  <div>
                    <p className="text-lg font-semibold">Web develepment</p>
                    <p className="text-sm text-gray-600">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded shadow-2xl hover:text-white bg-gray-50 hover:bg-sky-500">
                <p>
                  An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec
                  democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius
                  populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                  <div>
                    <p className="text-lg font-semibold">Mobile App Development </p>
                    <p className="text-sm text-gray-600">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
              {/* Add the missing closing div tags for the following grid items */}
              <div className="p-6 rounded shadow-2xl  hover:text-white bg-gray-50 hover:bg-sky-500 ">
                <p>
                  Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore
                  minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam
                  putent iudicabit consulatu cu.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                  <div>
                    <p className="text-lg font-semibold">Dgital Marketing</p>
                    <p className="text-sm text-gray-600">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
              <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                       <div class="flex items-center space-x-3">
                        <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                        </div>
                        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
                      </a>
              {/* Closing div tags for the other grid items */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
