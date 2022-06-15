const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

function svgsprite(){
    let config = {
        mode: {
            symbol: {
                dest : '.',
                sprite: 'sprite.svg'
            }
        }
    };

    return gulp.src("./images/svg/*.svg")      
        .pipe(svgSprite(config)).on('error', function(error){ console.log(error); })
        .pipe(gulp.dest("."));
}

exports.svgsprite = svgsprite;