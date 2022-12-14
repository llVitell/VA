<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    <main class="p-1.5 bg-verde rounded-xl">
      <section class="h-screen flex flex-col rounded-xl bg-white">
        <header class="flex justify-between p-3 items-center"> 
            <span class="material-symbols-outlined">
                <span class="material-symbols-outlined">
                    chevron_left
                </span>
            </span>
            <div class="flex items-center border-solid border border-verde p-1 rounded-xl">
                <input type="search">
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
            <span class="material-symbols-outlined">
                shopping_bag
            </span>
        </header>
        <section class="flex flex-grow flex-col justify-evenly">
            <div class="grid grid-rows-8 grid-cols-2 px-5 gap-2">
                <div class="row-span-2 flex justify-center">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/zongzi.png">
                </div>
                <div class="flex flex-col">
                    <span class="font-bold">Food Title</span>
                    <span class="text-rojizo font-semibold">$20</span>
                </div>
                <div class="flex items-center justify-end">
                    <span class="material-icons border-solid border border-rojizo rounded-full" style="font-size:20px;">
                        remove
                    </span>
                    <span class="font-semibold ml-2">
                        1
                    </span>
                    <span class="material-icons border-solid border border-rojizo rounded-full text-white bg-rojizo ml-2" style="font-size:20px;">
                        add
                    </span>
                </div>
            </div>
            <div class="grid grid-rows-8 grid-cols-2 px-5 gap-2">
                <div class="row-span-2 flex justify-center">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/tofu-picante.png">
                </div>
                <div class="flex flex-col">
                    <span class="font-bold">Food Title</span>
                    <span class="text-rojizo font-semibold">$20</span>
                </div>
                <div class="flex items-center justify-end">
                    <span class="material-icons border-solid border border-rojizo rounded-full" style="font-size:20px;">
                        remove
                    </span>
                    <span class="font-semibold ml-2">
                        1
                    </span>
                    <span class="material-icons border-solid border border-rojizo rounded-full text-white bg-rojizo ml-2" style="font-size:20px;">
                        add
                    </span>
                </div>
            </div>
            <div class="grid grid-rows-8 grid-cols-2 px-5 gap-2">
                <div class="row-span-2 flex justify-center">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/sopa-wantan.png">
                </div>
                <div class="flex flex-col">
                    <span class="font-bold">Food Title</span>
                    <span class="text-rojizo font-semibold">$20</span>
                </div>
                <div class="flex items-center justify-end">
                    <span class="material-icons border-solid border border-rojizo rounded-full" style="font-size:20px;">
                        remove
                    </span>
                    <span class="font-semibold ml-2">
                        1
                    </span>
                    <span class="material-icons border-solid border border-rojizo rounded-full text-white bg-rojizo ml-2" style="font-size:20px;">
                        add
                    </span>
                </div>
            </div>
            <div class="grid grid-rows-8 grid-cols-2 px-5 gap-2">
                <div class="row-span-2 flex justify-center">
                    <img class="w-36 h-24 rounded-xl" src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-10/10_platos_tipicos_de_china/pato-pekines.png">
                </div>
                <div class="flex flex-col">
                    <span class="font-bold">Food Title</span>
                    <span class="text-rojizo font-semibold">$20</span>
                </div>
                <div class="flex items-center justify-end">
                    <span class="material-icons border-solid border border-rojizo rounded-full" style="font-size:20px;">
                        remove
                    </span>
                    <span class="font-semibold ml-2">
                        1
                    </span>
                    <span class="material-icons border-solid border border-rojizo rounded-full text-white bg-rojizo ml-2" style="font-size:20px;">
                        add
                    </span>
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