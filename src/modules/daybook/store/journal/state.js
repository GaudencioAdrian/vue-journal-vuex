//Su estructura es de esa manera para que sea reactivo
export default () => ({
    isLoading: true,
    entries: [
        {
            //Crea un id como fecha de la fecha actual
            id: new Date().getTime(),//15032023
            //Da una fecha de creacion
            date: new Date().toDateString(),//sat 15, Marzo
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nemo excepturi maxime odio qui, ducimus laboriosam, illum officiis magni facilis, saepe voluptatibus voluptate nihil similique. Debitis provident facere at?',
            picture: null, //https://direccion-de-la-imagen
        },
        {
            //Crea un id como fecha de la fecha actual se le suma 100 porque da tan rapido el dato que se puede repetir al mismo tiempo
            id: new Date().getTime() + 1000,//15032023
            //Da una fecha de creacion
            date: new Date().toDateString(),//sat 15, Marzo
            text: 'Minima id velit odio? A et quod voluptatem saepe voluptates eum. Voluptatem veniam iste praesentium maxime! Quas dolorem provident adipisci quis consectetur.',
            picture: null, //https://direccion-de-la-imagen
        },
        {
            //Crea un id como fecha de la fecha actual se le suma 100 porque da tan rapido el dato que se puede repetir al mismo tiempo
            id: new Date().getTime() + 2000,//15032023
            //Da una fecha de creacion
            date: new Date().toDateString(),//sat 15, Marzo
            text: 'A laboriosam tenetur repudiandae similique officia nobis maxime labore explicabo deleniti consequatur? Aliquam sequi cum, ab earum molestiae possimus quia eveniet reprehenderit.',
            picture: null, //https://direccion-de-la-imagen
        },
    ]
})

/*****EL STATE ES DONDE SE ESTA ALMACENANDO LA INFORMACION Y EL STATE ES REACTIVO */