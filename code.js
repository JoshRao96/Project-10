var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","49095327-d1ca-4788-8197-60f54144359a","5b467f7c-361c-4e19-bace-132ad64ac632","27619ebb-572e-4770-a655-622a071d992b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"eSu2lelhomjPa.CN2dbt1GicsRUZmTa_","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"5_OEN9Hpz5ZFlt1xCSaVWkBx_5NtwNzV","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"dxLSyITR3mnokfFZgfiGMmLuTsGJR9Vz","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"49095327-d1ca-4788-8197-60f54144359a":{"name":"b1","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"5b467f7c-361c-4e19-bace-132ad64ac632":{"name":"e1","sourceUrl":"assets/api/v1/animation-library/gamelab/8xeR9hy.4OWNFlEjxb41UswP00DCJph5/category_vehicles/enemyRed2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"8xeR9hy.4OWNFlEjxb41UswP00DCJph5","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8xeR9hy.4OWNFlEjxb41UswP00DCJph5/category_vehicles/enemyRed2.png"},"27619ebb-572e-4770-a655-622a071d992b":{"name":"h1","sourceUrl":"assets/api/v1/animation-library/gamelab/CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo/category_vehicles/ship14.png","frameSize":{"x":399,"y":378},"frameCount":1,"looping":true,"frameDelay":2,"version":"CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":378},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo/category_vehicles/ship14.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b1");
var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="blue";

var goal =0;
var Deaths = 0;

hero.setAnimation("h1");
hero.scale=0.16;
enemy1.setAnimation("e1");
enemy1.scale=0.5;
enemy2.setAnimation("e1");
enemy2.scale=0.5;
enemy3.setAnimation("e1");
enemy3.scale=0.5;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);

hero.pointTo(200,0);

playSound("assets/Elektronomia---Energy--NCS-Release-.mp3", false);


function draw() {
  
//background(b);

createEdgeSprites();




enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-5;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+5;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_explosion/retro_game_classic_explosion_3.mp3");
  hero.x=200;
  hero.y=350;
  Deaths = Deaths+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_retro/retro_game_enemy_spawn_6.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}

drawSprites();

textSize(20);
  fill("white");
  text("Goals:"+goal,320,350);
  

textSize(20);
  fill("white");
  text("Deaths:"+Deaths,20,350);
  

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
