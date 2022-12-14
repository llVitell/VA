<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <main class="h-full p-1.5 bg-verde rounded-xl">
      <section class="flex flex-col rounded-xl bg-white">
        <header class="flex justify-between p-3"> 
            <span class="material-symbols-outlined">
                menu
            </span>
            <span class="material-symbols-outlined">
                shopping_bag
            </span>
        </header>
        <section>
            <div class="pt-3 px-5">
                <div class="flex mb-4">
                    <span class="flex flex-grow font-bold"> Top categories</span>
                    <span class="text-rojizo font-semibold"> See all</span>
                </div>
                <div class="flex justify-between">
                    <button class="bg-verde rounded-xl px-3 py-1 font-semibold text-white text-sm">Meat</button>
                    <button class="border-verde border-solid border rounded-xl px-3 py-1 text-sm">Chicken</button>
                    <button class="border-verde border-solid border rounded-xl px-3 py-1 text-sm">Drinks</button>
                    <button class="border-verde border-solid border rounded-xl px-3 py-1 text-sm">Drinks</button>
                </div>
            </div>
            <div class="pt-3 px-5">
                <div class="flex mb-5">
                    <span class="flex flex-grow font-bold"> Top offers</span>
                    <span class="text-rojizo font-semibold"> See all</span>
                </div>
                <div class="flex justify-between">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/zongzi.png">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/pollo-gong-bao-o-kung-pao.png">
                </div>
            </div>
            <div class="pt-3 px-5">
                <div class="flex mb-5">
                    <span class="flex flex-grow font-bold"> Most ordered</span>
                    <span class="text-rojizo font-semibold"> See all</span>
                </div>
                <div class="flex justify-between">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/pato-pekines.png">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/sopa-wantan.png">
                </div>
            </div>
            <div class="py-3 px-5">
                <div class="flex mb-5">
                    <span class="flex flex-grow font-bold"> Recommended for you</span>
                    <span class="text-rojizo font-semibold"> See all</span>
                </div>
                <div class="flex justify-between">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/tofu-picante.png">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/rollitos-de-primavera.png">
                </div>
            </div>

        </section>
        <footer class="flex p-3 justify-between">
            <span class="material-symbols-outlined">
                home
            </span>
            <span class="material-symbols-outlined">
                call
            </span>
            <span class="material-symbols-outlined">
                favorite
            </span>
            <span class="material-symbols-outlined">
                person
            </span>
        </footer>
      </section>
    </main>
</template>