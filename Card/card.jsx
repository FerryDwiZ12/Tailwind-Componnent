//===============config file===============//

/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        "merah-gw": "rgba(220, 20, 60, 0.388)",
      },
    },
  },
  plugins: [],
};

//===================Css=======================//

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer components {
//   .card {
//     background-color: theme("colors.white");
//     border-radius: theme("borderRadius.lg");
//     padding: theme("spacing.6");
//     box-shadow: theme("boxShadow.xl");
//     width: 513px;
//   }
//   /* ... */
// }

// Html

<div class="m-40">
  <div class="card flex shadow-xl">
    <div class="relative m-4 overflow-hidden rounded-xl bg-orange-200">
      <img class="rounded-xl" src="https://ppdb.smaislampbs.sch.id/assets2/images/logo/logo.png" alt="" />
      <div class=""><h1 class="bg-merah-gw h-9 text-center text-lg font-medium text-white">Discount 5%</h1></div>
    </div>
    <div class="w-3/4 items-center">
      <div class="mt-4 flex items-center justify-between">
        <div><h1 class="text-xl font-bold">Restoran Tengah</h1></div>
        <div><h2 class="mr-5 items-center text-sm font-semibold text-green-500">Avalaible</h2></div>
      </div>
      <div class="mt-1 text-sm font-normal">
        <h1 class="font-semibold text-amber-600">Rp.50.000</h1>
      </div>
      <div class="mt-2 mr-5 bg-white"><h3 class="text-justify text-base font-medium">Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan...</h3></div>
      <div class="mt-7 mr-5 flex items-center justify-between">
        <div class="flex items-center justify-between">
          <div><button class="mr-3 font-bold">-</button></div>
          <div><h1 class="font-bold">3</h1></div>
          <div><button class="ml-3 font-bold">+</button></div>
        </div>
        <div>
          <button class="rounded-xl bg-stone-900 text-zinc-50"><h1 class="m-2.5 ml-6 mr-5">Add to card</h1></button>
        </div>
      </div>
    </div>
  </div>
</div>


