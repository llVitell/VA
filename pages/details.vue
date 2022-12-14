<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <main class="p-1.5 bg-verde rounded-xl font-sans">
      <section class="h-screen flex flex-col rounded-xl bg-white">
        <header class="flex justify-between p-3 items-center"> 
            <span class="material-symbols-outlined">
                <span class="material-symbols-outlined">
                    chevron_left
                </span>
            </span>
            <span class="font-semibold p-1">
                Food Details
            </span>
            <span class="material-symbols-outlined">
                shopping_bag
            </span>
        </header>
        <section class="flex h-full flex-grow flex-col px-3">
            <div>
                <img class="h-fit w-fit rounded-xl mt-3" src="https://www.cocinacaserayfacil.net/wp-content/uploads/2019/11/Comida-china.jpg">
            </div>
            <div class="p-4 flex flex-col h-full">
                <h1 class="font-bold text-xl">Food Name</h1>
                <p class="py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sit quibusdam consequatur aut
                </p>
                <div>
                    <span class="mr-4 text-rojizo font-semibold">
                    $10.99
                </span>
                <span class="line-through decoration-1 text-gray-500">
                    $12.99
                </span>
                </div>
                <h1 class="font-bold text-xl mt-4">Indications</h1>
                <input class="border-solid border-rojizo border mt-3 w-full h-fit flex flex-grow rounded-xl" type="text">
                <div class="flex items-center justify-between mt-4">
                    <div class="items-center flex">
                        <span class="material-symbols-outlined border-solid border border-rojizo rounded-full" style="font-size:20px;">
                            remove
                        </span>
                        <span class="font-semibold ml-2">
                            2
                        </span>
                        <span class="material-symbols-outlined border-solid border border-rojizo rounded-full text-white bg-rojizo ml-2" style="font-size:20px;">
                            add
                        </span>
                    </div>
                    <button class=" bg-verde p-2.5 rounded-xl text-white font-semibold">Add $21.98</button>
                </div>
            </div>
        </section>   
      </section>
    </main>
</template>