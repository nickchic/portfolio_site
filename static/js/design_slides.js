$(document).ready(function(){
    //add thumb nails
    displaySlide(currentSlide);

    //assign click functions
    $('#next').click(() => changeSlide(true));
    $('#prev').click(() => changeSlide(false));

    $('.zoom_button').click(zoom);
    //$('body').click(zoom);

});

let zoomed = false;
let currentSlide = 0;
const slides = [
    {
        image_url:'static/images/SolveSite_1.jpg',
        title:'Solve Site 1',
        blurb:'Home page of the Solve Media website.',
    },
    {
        image_url:'static/images/SolveSite_2.jpg',
        title:'Solve Site 2',
        blurb:'Media page of the Solve Media website',
    },
    {
        image_url:'static/images/DoubleFeature_1.jpg',
        title:'Double Feature',
        blurb:'Book of movie quoted from good and bad movies',
    },
    {
        image_url:'static/images/EarWhacks.jpg',
        title:'Ear Whacks',
        blurb:'Poster about the dangers of qtips',
    },
    {
        image_url:'static/images/Earth.jpg',
        title:'Earth',
        blurb:'Poster for the environment',
    },
]

function changeSlide(next){
    currentSlide = next ? (currentSlide + 1) % slides.length : currentSlide === 0 ? (slides.length - 1) : (currentSlide - 1);
    displaySlide(currentSlide);
}

function displaySlide(index){
    currentSlide = index;
    $('#port_img').attr('src', slides[index].image_url);
    $('#blurb').html(slides[index].blurb);
    $('#port_subhead').html(slides[index].title);
    updateThumbs();
    console.log(slides[index]);
}

function updateThumbs(){
    let html = ''
    for(let i = 0; i < slides.length; i++){
        html = html + `<span class='thumbnail' slide='${ i }'><img src='static/images/${ i === currentSlide ? 'full' : 'empty' }.png' alt='thumb_${i}' /></span>`
    }
    $('#thumbs').html(html);
    $('.thumbnail').click((e)=>{
        displaySlide(parseInt($(e.currentTarget).attr('slide')));
    })
}

function zoom(){
    console.log('zoom');
    if(!zoomed){
        zoomed = true;
        $('#zoom').removeClass( 'invisible' );
        $('#content').addClass( 'invisible' );
        $('#zoom').html(`<img src='${ slides[currentSlide].image_url }' alt='pic' />`);
        $('body, html').addClass( 'black' );
    } else {
        zoomed = false;
        $('#zoom').addClass( 'invisible' );
        $('#content').removeClass( 'invisible' );
        $('#zoom').html('');
        $('body, html').removeClass( 'black' );
    }
}
