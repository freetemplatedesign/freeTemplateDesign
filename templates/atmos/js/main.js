$(document).ready(function(){

  $(".fullSize").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $(".fullSize").css({height:$(window).innerHeight()})
  });








  //for threejs birds


  var Bird = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v(   5,   0,   0 );
	v( - 5, - 2,   1 );
	v( - 5,   0,   0 );
	v( - 5, - 2, - 1 );

	v(   0,   2, - 6 );
	v(   0,   2,   6 );
	v(   2,   0,   0 );
	v( - 3,   0,   0 );

	f3( 0, 2, 1 );
	// f3( 0, 3, 2 );

	f3( 4, 7, 6 );
	f3( 5, 6, 7 );

	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vector3( x, y, z ) );

	}

	function f3( a, b, c ) {

		scope.faces.push( new THREE.Face3( a, b, c ) );

	}

}

Bird.prototype = Object.create( THREE.Geometry.prototype );
Bird.prototype.constructor = Bird;

/*
     FILE ARCHIVED ON 21:27:10 Oct 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:58:08 Sep 16, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 471.391 (3)
  esindex: 0.01
  captures_list: 492.794
  CDXLines.iter: 12.305 (3)
  PetaboxLoader3.datanode: 49.367 (4)
  exclusion.robots: 0.239
  exclusion.robots.policy: 0.223
  RedisCDXSource: 5.326
  PetaboxLoader3.resolve: 40.633 (2)
  load_resource: 32.413
*/











  var Boid = function() {
    //canvasOpacity1();
				var vector = new THREE.Vector3(),
				_acceleration, _width = 500, _height = 500, _depth = 200, _goal, _neighborhoodRadius = 100,
				_maxSpeed = 4, _maxSteerForce = 0.1, _avoidWalls = false;

				this.position = new THREE.Vector3();
				this.velocity = new THREE.Vector3();
				_acceleration = new THREE.Vector3();

				this.setGoal = function ( target ) {

					_goal = target;

				}

				this.setAvoidWalls = function ( value ) {

					_avoidWalls = value;

				}

				this.setWorldSize = function ( width, height, depth ) {

					_width = width;
					_height = height;
					_depth = depth;

				}

				this.run = function ( boids ) {

					if ( _avoidWalls ) {

						vector.set( - _width, this.position.y, this.position.z );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.add( vector );

						vector.set( _width, this.position.y, this.position.z );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.add( vector );

						vector.set( this.position.x, - _height, this.position.z );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.add( vector );

						vector.set( this.position.x, _height, this.position.z );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.add( vector );

						vector.set( this.position.x, this.position.y, - _depth );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.add( vector );

						vector.set( this.position.x, this.position.y, _depth );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.add( vector );

					}/* else {

						this.checkBounds();

					}
					*/

					if ( Math.random() > 0.5 ) {

						this.flock( boids );

					}

					this.move();

				}

				this.flock = function ( boids ) {

					if ( _goal ) {

						_acceleration.add( this.reach( _goal, 0.005 ) );

					}

					_acceleration.add( this.alignment( boids ) );
					_acceleration.add( this.cohesion( boids ) );
					_acceleration.add( this.separation( boids ) );

				}

				this.move = function () {

					this.velocity.add( _acceleration );

					var l = this.velocity.length();

					if ( l > _maxSpeed ) {

						this.velocity.divideScalar( l / _maxSpeed );

					}

					this.position.add( this.velocity );
					_acceleration.set( 0, 0, 0 );

				}

				this.checkBounds = function () {

					if ( this.position.x >   _width ) this.position.x = - _width;
					if ( this.position.x < - _width ) this.position.x =   _width;
					if ( this.position.y >   _height ) this.position.y = - _height;
					if ( this.position.y < - _height ) this.position.y =  _height;
					if ( this.position.z >  _depth ) this.position.z = - _depth;
					if ( this.position.z < - _depth ) this.position.z =  _depth;

				}

				//

				this.avoid = function ( target ) {

					var steer = new THREE.Vector3();

					steer.copy( this.position );
					steer.sub( target );

					steer.multiplyScalar( 1 / this.position.distanceToSquared( target ) );

					return steer;

				}

				this.repulse = function ( target ) {

					var distance = this.position.distanceTo( target );

					if ( distance < 150 ) {

						var steer = new THREE.Vector3();

						steer.subVectors( this.position, target );
						steer.multiplyScalar( 0.5 / distance );

						_acceleration.add( steer );

					}

				}

				this.reach = function ( target, amount ) {

					var steer = new THREE.Vector3();

					steer.subVectors( target, this.position );
					steer.multiplyScalar( amount );

					return steer;

				}

				this.alignment = function ( boids ) {

					var boid, velSum = new THREE.Vector3(),
					count = 0;

					for ( var i = 0, il = boids.length; i < il; i++ ) {

						if ( Math.random() > 0.6 ) continue;

						boid = boids[ i ];

						distance = boid.position.distanceTo( this.position );

						if ( distance > 0 && distance <= _neighborhoodRadius ) {

							velSum.add( boid.velocity );
							count++;

						}

					}

					if ( count > 0 ) {

						velSum.divideScalar( count );

						var l = velSum.length();

						if ( l > _maxSteerForce ) {

							velSum.divideScalar( l / _maxSteerForce );

						}

					}

					return velSum;

				}

				this.cohesion = function ( boids ) {

					var boid, distance,
					posSum = new THREE.Vector3(),
					steer = new THREE.Vector3(),
					count = 0;

					for ( var i = 0, il = boids.length; i < il; i ++ ) {

						if ( Math.random() > 0.6 ) continue;

						boid = boids[ i ];
						distance = boid.position.distanceTo( this.position );

						if ( distance > 0 && distance <= _neighborhoodRadius ) {

							posSum.add( boid.position );
							count++;

						}

					}

					if ( count > 0 ) {

						posSum.divideScalar( count );

					}

					steer.subVectors( posSum, this.position );

					var l = steer.length();

					if ( l > _maxSteerForce ) {

						steer.divideScalar( l / _maxSteerForce );

					}

					return steer;

				}

				this.separation = function ( boids ) {

					var boid, distance,
					posSum = new THREE.Vector3(),
					repulse = new THREE.Vector3();

					for ( var i = 0, il = boids.length; i < il; i ++ ) {

						if ( Math.random() > 0.6 ) continue;

						boid = boids[ i ];
						distance = boid.position.distanceTo( this.position );

						if ( distance > 0 && distance <= _neighborhoodRadius ) {

							repulse.subVectors( this.position, boid.position );
							repulse.normalize();
							repulse.divideScalar( distance );
							posSum.add( repulse );

						}

					}

					return posSum;

				}

			}



			var SCREEN_WIDTH = window.innerWidth,
			SCREEN_HEIGHT = window.innerHeight,
			SCREEN_WIDTH_HALF = SCREEN_WIDTH  / 2,
			SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

			var camera, scene, renderer,
			birds, bird;

			var boid, boids;



			init();
			animate();



			function init() {

				camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
				camera.position.z = 450;

				scene = new THREE.Scene();

				birds = [];
				boids = [];

				for ( var i = 0; i < 45; i ++ ) {

					boid = boids[ i ] = new Boid();
					boid.position.x = Math.random() * 400 - 200;
					boid.position.y = Math.random() * 400 - 200;
					boid.position.z = Math.random() * 400 - 200;
					boid.velocity.x = Math.random() * 2 - 1;
					boid.velocity.y = Math.random() * 2 - 1;
					boid.velocity.z = Math.random() * 2 - 1;
					boid.setAvoidWalls( true );
					boid.setWorldSize( 500, 500, 400 );

					//bird = birds[ i ] = new THREE.Mesh( new Bird(), new THREE.MeshBasicMaterial( { color:Math.random() * 0x9EBC9E, side: THREE.DoubleSide } ) );
          bird = birds[ i ] = new THREE.Mesh( new Bird(), new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } ) );
          //bird = birds[ i ] = new THREE.Mesh( new Bird(), new THREE.MeshBasicMaterial( { color:Math.random(), side: THREE.DoubleSide } ) );


					bird.phase = Math.floor( Math.random() * 62.83 );
					scene.add( bird );


				}

				renderer = new THREE.CanvasRenderer({alpha:true});
        //below is original code
				//renderer.setClearColor( 0x5D7CBA);
        //renderer.setClearColor(0x000000,0);
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        renderer.domElement.id = 'birdHolder'

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				//document.body.appendChild( renderer.domElement );

        document.getElementById('shell').appendChild(renderer.domElement);
        //document.getElementById('container').appendChild(renderer.domElement);







				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseMove( event ) {

				var vector = new THREE.Vector3( event.clientX - SCREEN_WIDTH_HALF, - event.clientY + SCREEN_HEIGHT_HALF, 0 );

				for ( var i = 0, il = boids.length; i < il; i++ ) {

					boid = boids[ i ];

					vector.z = boid.position.z;

					boid.repulse( vector );

				}

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();


			}

			function render() {

				for ( var i = 0, il = birds.length; i < il; i++ ) {

					boid = boids[ i ];
					boid.run( boids );

					bird = birds[ i ];
					bird.position.copy( boids[ i ].position );

					//color = bird.material.color;

          color = 0xAB4E68;

          //Change numbers here for changing color, original commented out below
					//color.r = color.g = color.b = ( 500 - bird.position.z ) / 1000;
          color.r = color.g = color.b = ( 200 - bird.position.z ) / 1000;

					bird.rotation.y = Math.atan2( - boid.velocity.z, boid.velocity.x );
					bird.rotation.z = Math.asin( boid.velocity.y / boid.velocity.length() );

					bird.phase = ( bird.phase + ( Math.max( 0, bird.rotation.z ) + 0.1 )  ) % 62.83;
					bird.geometry.vertices[ 5 ].y = bird.geometry.vertices[ 4 ].y = Math.sin( bird.phase ) * 5;

				}

				renderer.render( scene, camera );

			}










          //var logo = $('.logo'),
          //      transform = $('.transform'),
          //      transformContent = $('.transformContent');
          var centerContent = $('.centerContent'),
              centerShell = $('.centerShell'),
              backgroundSquare = $('.backgroundSquare'),
              name = $('.name'),
              socialIcons = $('.socialIcons'),
              birdHolder = $("#birdHolder"),
              container = $('#container'),


              hugeSocial = $('.hugeSocial'),
              testItem = $('.testItem'),
              about = $('.about'),
              contact = $('.contact'),
              follow = $('.follow'),
              centerImg = $('.centerImg'),
              centerBackground = $('.centerBackground'),

              aboutContent = $('.aboutContent'),
              followContent = $('.followContent'),
              contactContent = $('.contactContent'),

              socialIcons = $('.socialIcons'),

              square = $('.square'),
              pageLink = $('.pageLink');






            var loading = new TimelineMax();

            TweenMax.set(centerContent, {y:1000})

            //TweenMax.set(name, {autoAlpha:0, y:-30})
            TweenMax.set(socialIcons, {autoAlpha:0, y:50})
            TweenMax.set($("#birdHolder"), {zIndex:300})



            loading
              .to(centerContent,2, {y:0})
              .to(centerShell, 1.2, {rotationX:0}, 1)
              //.to(name, 1, {autoAlpha:1, y:0}, 3)
              .fromTo(name, 0.4, {y:-50}, {y:0, opacity:1}, 3)
              .fromTo(pageLink, 0.4, {x:-50}, {x:0, opacity:1}, 3)
              .to(socialIcons, 1, {autoAlpha:1, y:0}, 3)
              //.to($("#birdHolder"), 4, {opacity:"0.9"}, 3)

              .to(square, 0.2, { css:{boxShadow: "0px 5px 45px -12px #000"}},3)
              .to(centerBackground, 0.2, { opacity:1},3)


              //code for big socialIcons

              //.staggerFromTo(testItem, 1, {autoAlpha:0, y:100}, {autoAlpha:0.4, y:0}, 0.25)





              var aboutCounter = 1,
                  followCounter = 1,
                  contactCounter = 1;

                  about.on("click", function(){
                    aboutCounter++;

                      if(aboutCounter%2=== 0){
                        rotateStart()
                        TweenMax.to($(this).siblings('.pageLink'), 1, {autoAlpha:0})
                        aboutStart();

                       }else if(aboutCounter%2===1){
                        rotateEnd()
                        TweenMax.to($(this).siblings('.pageLink'), 1, {autoAlpha:1})
                        aboutEnd();

                      }
                  })

                  follow.on("click", function(){
                    followCounter++;

                      if(followCounter%2=== 0){
                        rotateStart()
                        TweenMax.to($(this).siblings('.pageLink'), 1, {autoAlpha:0})
                        followStart();
                       }else if(followCounter%2===1){
                        rotateEnd()
                        TweenMax.to($(this).siblings('.pageLink'), 1, {autoAlpha:1})
                        followEnd();
                      }
                  })

                  contact.on("click", function(){
                    contactCounter++;

                      if(contactCounter%2=== 0){
                        rotateStart();
                        TweenMax.to($(this).siblings('.pageLink'), 1, {autoAlpha:0})
                        contactStart();
                       }else if(contactCounter%2===1){
                        rotateEnd();
                        TweenMax.to($(this).siblings('.pageLink'), 1, {autoAlpha:1})
                        contactEnd();
                      }
                  })



              //TweenMax.set(aboutContent, {autoAlpha:0})
              TweenMax.set(followContent, {autoAlpha:0})


              var aboutStart = function(){
                TweenMax.to(aboutContent, 0.3,  {delay: 1, opacity:1, pointerEvents:'all'})

              }

              var aboutEnd = function(){
                TweenMax.to(aboutContent, 0.1, { opacity:0, pointerEvents:'none'})
              }





              var followStart = function(){
                TweenMax.set(followContent,{ autoAlpha:1})
                TweenMax.staggerFromTo(socialIcons, 1, {autoAlpha:0, y:50 },{ delay:1, y:0, autoAlpha:1, ease: Elastic.easeOut.config(1, 0.5)}, 0.1)
              }

              var followEnd = function(){
                TweenMax.to(followContent, 0.1, {autoAlpha:0})
              }



              var contactStart = function(){
                TweenMax.to(contactContent, 0.3,  {delay: 1, opacity:1, pointerEvents:'all'})

              }

              var contactEnd = function(){
                TweenMax.to(contactContent, 0.1, { opacity:0, pointerEvents:'none'})
              }





              var rotateStart = function(){
                TweenMax.to(centerImg, 1, {rotationY:180})
                TweenMax.to(centerBackground, 1, {rotationY:180, backgroundColor:'#312d2d'})
                TweenMax.to(centerImg, 0.3, { delay:0.1, autoAlpha:0})
                TweenMax.to(backgroundSquare, 1, {rotationY:180})
                TweenMax.to(square, 0.01, {css:{boxShadow: "none"}})
                TweenMax.to(square, 0.2, {delay: 1, css:{boxShadow: "0px 5px 45px -12px #000"}})

              }

              var rotateEnd = function(){
                TweenMax.to(centerImg, 1, {rotationY:0})
                TweenMax.to(centerBackground, 1, {rotationY:0, backgroundColor:'transparent'})
                TweenMax.to(centerImg, 0.3, {delay:0.3, autoAlpha:1})
                TweenMax.to(backgroundSquare, 1, {rotationY:0})
                TweenMax.to(square, 0.01, {css:{boxShadow: "none"}})
                TweenMax.to(square, 0.2, {delay: 1, css:{boxShadow: "0px 5px 45px -12px #000"}})
              }

              var siblingStart = function(){
                TweenMax.to($(this).siblings('.pageLink'), 1, {autoAlpha:0})
              }

              var siblingEnd = function(){
                TweenMax.to($(this).siblings('.pageLink'), 1, {autoAlpha:1})
              }









})//end js
