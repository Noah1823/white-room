let mySprite: Sprite = null
let p1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(p1)
characterAnimations.loopFrames(
p1,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
p1,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f 2 2 f f f f . . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f f 2 f e f . . 
    . . f f f 2 f e e 2 2 f f f . . 
    . . f e 2 f f e e 2 f e e f . . 
    . f f e f f e e e f e e e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . . e f f f f f f f f 4 e . . 
    . . . 4 f 2 2 2 2 2 e d d 4 . . 
    . . . e f f f f f f e e 4 . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f 2 2 f f f f . . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e f 2 f f f 2 f 2 e f . . 
    . . f f f 2 2 e e f 2 f f f . . 
    . . f e e f 2 e e f f 2 e f . . 
    . f f e e e f e e e f f e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f e . . . 
    . . 4 d d e 2 2 2 2 2 f 4 . . . 
    . . . 4 e e f f f f f f e . . . 
    . . . . . . . . . f f f . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
p1,
[img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `,img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e d d 4 . . . . 
    . . . f 2 2 2 2 e d d e . . . . 
    . . f f 5 5 4 4 f e e f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
p1,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f e 4 d d d d 4 e f . . . 
    . . e 4 d d e 2 2 2 2 f e f . . 
    . . . e d d e 2 2 2 2 f 4 e . . 
    . . . . e e f 5 5 4 4 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . f f f . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingDown)
)
let p2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(p2)
characterAnimations.loopFrames(
p2,
[img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . f f f f . . . . 
    . . . f f f f f f f f . . 
    . . f f f f f f c f f f . 
    f f f f f f f c c f f f c 
    f f f f c f f f f f f f c 
    . c c c f f f e e f f c c 
    . f f f f f e e f f c c f 
    . f f f b f e e f b f f f 
    . f f 4 1 f 4 4 f 1 4 f f 
    . . f e 4 4 4 4 4 e e f e 
    . f e f b 7 7 7 e 4 4 4 e 
    . e 4 f 7 7 7 7 e 4 4 e . 
    . . . f 6 6 6 6 6 e e . . 
    . . . f f f f f f f . . . 
    . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f c f f f f f f . . 
    c f f f c c f f f f f f f 
    c f f f f f f f c f f f f 
    c c f f e e f f f c c c . 
    f c c f f e e f f f f f . 
    f f f b f e e f b f f f . 
    f f 4 1 f 4 4 f 1 4 f f . 
    e f e e 4 4 4 4 4 e f . . 
    e 4 4 4 e 7 7 7 b f e f . 
    . e 4 4 e 7 7 7 7 f 4 e . 
    . . e e 6 6 6 6 6 f . . . 
    . . . f f f f f f f . . . 
    . . . . . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingDown)
)
characterAnimations.loopFrames(
p2,
[img`
    . . . . . f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . . f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . . f f e e f b f e e f f 
    . . . f 4 4 f 1 e 4 e f . 
    . . . f 4 4 4 4 e f f f . 
    . . . f f e e e e e f . . 
    . . . f 7 7 7 e 4 4 e . . 
    . . . f 7 7 7 e 4 4 e . . 
    . . . f 6 6 6 f e e f . . 
    . . . . f f f f f f . . . 
    . . . . . . f f f . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . f f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . f f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . . f f e e f b f e e f f 
    . . f f 4 4 f 1 e 4 e f . 
    . . . f 4 4 4 e e f f f . 
    . . . f f e e 4 4 e f . . 
    . . . f 7 7 e 4 4 e f . . 
    . . f f 6 6 f e e f f f . 
    . . f f f f f f f f f f . 
    . . . f f f . . . f f . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . f f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . f f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . f f f e e f b f e e f f 
    . . f f 4 4 f 1 e 4 e f f 
    . . . f 4 4 4 4 e f f f . 
    . . . f f e e e e 4 4 4 . 
    . . . f 7 7 7 7 e 4 4 e . 
    . . f f 6 6 6 6 f e e f . 
    . . f f f f f f f f f f . 
    . . . f f f . . . f f . . 
    `],
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
p2,
[img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f f . 
    f f e 4 e 1 f 4 4 f f . . 
    . f f f e 4 4 4 4 f . . . 
    . 4 4 4 e e e e f f . . . 
    . e 4 4 e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f f . . 
    . f f f e e 4 4 4 f . . . 
    . . f e 4 4 e e f f . . . 
    . . f e 4 4 e 7 7 f . . . 
    . f f f e e f 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `,img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
p2,
[img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . f f f f . . . . 
    . . . f f f f f f f f . . 
    . . f f f f f f c f f f . 
    f f f f f f f c c f f f c 
    f f f f c f f f f f f f c 
    . c c c f f f e e f f c c 
    . f f f f f e e f f c c f 
    . f f f b f e e f b f f f 
    . f f 4 1 f 4 4 f 1 4 f f 
    . . f e 4 4 4 4 4 e e f e 
    . f e f b 7 7 7 e 4 4 4 e 
    . e 4 f 7 7 7 7 e 4 4 e . 
    . . . f 6 6 6 6 6 e e . . 
    . . . f f f f f f f . . . 
    . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f c f f f f f f . . 
    c f f f c c f f f f f f f 
    c f f f f f f f c f f f f 
    c c f f e e f f f c c c . 
    f c c f f e e f f f f f . 
    f f f b f e e f b f f f . 
    f f 4 1 f 4 4 f 1 4 f f . 
    e f e e 4 4 4 4 4 e f . . 
    e 4 4 4 e 7 7 7 b f e f . 
    . e 4 4 e 7 7 7 7 f 4 e . 
    . . e e 6 6 6 6 6 f . . . 
    . . . f f f f f f f . . . 
    . . . . . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingDown)
)
let p3 = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.player3.moveSprite(p3)
characterAnimations.loopFrames(
p3,
[img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d 4 e f e . 
    . f e f f b b b e d d 4 e . 
    . e 4 f b 3 3 3 e d d e . . 
    . . . f 6 6 6 6 f e e . . . 
    . . . f f f f f f f . . . . 
    . . . f f f . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . e f e 4 d d d d d f f . . 
    . e 4 d d e b b b f f e f . 
    . . e d d e 3 3 b e f 4 e . 
    . . . e e f 6 6 6 6 f . . . 
    . . . . f f f f f f f . . . 
    . . . . . . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingDown)
)
characterAnimations.loopFrames(
p3,
[img`
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f e 4 4 c c c f f f f . 
    . f f e 4 4 f b f 4 4 f f . 
    . . f f d d f 1 4 d 4 f . . 
    . . . f d d d d 4 f f f . . 
    . . . f e 4 4 4 e e f . . . 
    . . . f 3 3 3 e d d 4 . . . 
    . . . f 3 3 3 e d d e . . . 
    . . . f 6 6 6 f e e f . . . 
    . . . . f f f f f f . . . . 
    . . . . . . f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f c 4 4 c c c f f f f . 
    . f f f 4 4 f b f 4 4 f f . 
    . . f f d d f 1 4 d 4 f . . 
    . . . f d d d e e f f f . . 
    . . . f e 4 e d d 4 f . . . 
    . . . f 3 3 e d d e f . . . 
    . . f f 6 6 f e e f f f . . 
    . . f f f f f f f f f f . . 
    . . . f f f . . . f f . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f c 4 4 c c c f f f f . 
    . f f f 4 4 f b f 4 4 f f . 
    . . f c d d f 1 4 d 4 f f . 
    . . . f d d d d 4 f f f . . 
    . . . f e 4 4 4 e d d 4 . . 
    . . . f 3 3 3 3 e d d e . . 
    . . f f 6 6 6 6 f e e f . . 
    . . f f f f f f f f f f . . 
    . . . f f f . . . f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
p3,
[img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 c f f . 
    . f f 4 4 f b f 4 4 f f f . 
    . f f 4 d 4 1 f d d c f . . 
    . . f f f 4 d d d d f . . . 
    . . 4 d d e 4 4 4 e f . . . 
    . . e d d e 3 3 3 3 f . . . 
    . . f e e f 6 6 6 6 f f . . 
    . . f f f f f f f f f f . . 
    . . . f f . . . f f f . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 c f f . 
    . f f 4 4 f b f 4 4 f f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f e e d d d f . . . 
    . . . f 4 d d e 4 e f . . . 
    . . . f e d d e 3 3 f . . . 
    . . f f f e e f 6 6 f f . . 
    . . f f f f f f f f f f . . 
    . . . f f . . . f f f . . . 
    `,img`
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 e f f . 
    . f f 4 4 f b f 4 4 e f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f 4 d d d d f . . . 
    . . . f e e 4 4 4 e f . . . 
    . . . 4 d d e 3 3 3 f . . . 
    . . . e d d e 3 3 3 f . . . 
    . . . f e e f 6 6 6 f . . . 
    . . . . f f f f f f . . . . 
    . . . . . f f f . . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
p3,
[img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c c c c c c c f . 
    . f f c c c c c c c c f f . 
    . f f f c c c c c c f f f . 
    . f f f f f f f f f f f f . 
    . . f f f f f f f f f f . . 
    . . e f f f f f f f f e . . 
    . e 4 f f f f f f f f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c c c c c c f f . 
    . f f c c c c c c c c f f . 
    . f f c c c c c c f f f f . 
    . f f f f f f f f f f f f . 
    . . f f f f f f f f f f . . 
    . . e f f f f f f f f e . . 
    . . e f f f f f f f f 4 e . 
    . . 4 f 3 3 3 3 3 e d d 4 . 
    . . e f f f f f f e e 4 . . 
    . . . f f f . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f f c c c c c c c c c f . 
    . f f c c c c c c c c f f . 
    . f f f f c c c c c c f f . 
    . f f f f f f f f f f f f . 
    . . f f f f f f f f f f . . 
    . . e f f f f f f f f e . . 
    . e 4 f f f f f f f f e . . 
    . 4 d d e 3 3 3 3 3 f 4 . . 
    . . 4 e e f f f f f f e . . 
    . . . . . . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingUp)
)
let p4 = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.player4.moveSprite(p4)
characterAnimations.loopFrames(
p4,
[img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d 4 e f e 
    f f f e 4 4 4 4 d d 4 e 
    e 4 f b 1 1 1 e d d e . 
    . . f 6 6 6 6 f e e . . 
    . . f f f f f f f . . . 
    . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    e f e 4 d b b d d e f . 
    e 4 d d 4 4 4 4 e f f f 
    . e d d e 1 1 1 b f 4 e 
    . . e e f 6 6 6 6 f . . 
    . . . f f f f f f f . . 
    . . . . . . . f f f . . 
    `],
500,
characterAnimations.rule(Predicate.MovingDown)
)
characterAnimations.loopFrames(
p4,
[img`
    . . . f f f f f . . . . 
    . . f e e e e e f f . . 
    . f e e e e e e e f f . 
    f e e e e e e e f f f f 
    f e e 4 e e e f f f f f 
    f e e 4 4 e e e f f f f 
    f f e 4 4 4 4 4 f f f f 
    f f e 4 4 f f 4 e 4 f f 
    . f f d d d d 4 d 4 f . 
    . . f b b d d 4 f f f . 
    . . f e 4 4 4 e e f . . 
    . . f 1 1 1 e d d 4 . . 
    . . f 1 1 1 e d d e . . 
    . . f 6 6 6 f e e f . . 
    . . . f f f f f f . . . 
    . . . . . f f f . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . . f e e e e e f f f . 
    . f e e e e e e e f f f 
    f e e e e e e e f f f f 
    f e e 4 e e e f f f f f 
    f e e 4 4 e e e f f f f 
    f f e 4 4 4 4 4 f f f f 
    . f e 4 4 f f 4 e 4 f f 
    . . f d d d d 4 d 4 f . 
    . . f b b d e e f f f . 
    . . f e 4 e d d 4 f . . 
    . . f 1 1 e d d e f . . 
    . f f 6 6 f e e f f f . 
    . f f f f f f f f f f . 
    . . f f f . . . f f . . 
    `,img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . . f e e e e e f f f . 
    . f e e e e e e e f f f 
    f e e e e e e e f f f f 
    f e e 4 e e e f f f f f 
    f e e 4 4 e e e f f f f 
    f f e 4 4 4 4 4 f f f f 
    . f e 4 4 f f 4 e 4 f f 
    . . f d d d d 4 d 4 f f 
    . . f b b d d 4 f f f . 
    . . f e 4 4 4 e d d 4 . 
    . . f 1 1 1 1 e d d e . 
    . f f 6 6 6 6 f e e f . 
    . f f f f f f f f f f . 
    . . f f f . . . f f . . 
    `],
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
p4,
[img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e e f . . 
    f f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f . 
    f f 4 d 4 d d d d f . . 
    . f f f 4 d d b b f . . 
    . 4 d d e 4 4 4 e f . . 
    . e d d e 1 1 1 1 f . . 
    . f e e f 6 6 6 6 f f . 
    . f f f f f f f f f f . 
    . . f f . . . f f f . . 
    `,img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e e f . . 
    f f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f . 
    . f 4 d 4 d d d d f . . 
    . f f f e e d b b f . . 
    . . f 4 d d e 4 e f . . 
    . . f e d d e 1 1 f . . 
    . f f f e e f 6 6 f f . 
    . f f f f f f f f f f . 
    . . f f . . . f f f . . 
    `,img`
    . . . . f f f f f . . . 
    . . f f e e e e e f . . 
    . f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f f 
    . f 4 d 4 d d d d f f . 
    . f f f 4 d d b b f . . 
    . . f e e 4 4 4 e f . . 
    . . 4 d d e 1 1 1 f . . 
    . . e d d e 1 1 1 f . . 
    . . f e e f 6 6 6 f . . 
    . . . f f f f f f . . . 
    . . . . f f f . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
p4,
[img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f e e e e e e f e f 
    f f f f e e e e f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 f b b b b b b f 4 e 
    4 d f d d d d d d c d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f e e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f e e e e e e e f e f 
    f f f e e e e f f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    . 4 f b b b b b f e 4 e 
    . 4 f d d d d d e d d 4 
    . e f f f f f f e e 4 . 
    . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f f e e e e e f e f 
    f f f f f e e e e f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 e f b b b b b f 4 . 
    4 d d e d d d d d f 4 . 
    . 4 e e f f f f f f e . 
    . . . . . . . f f f . . 
    `],
500,
characterAnimations.rule(Predicate.MovingUp)
)
p1.setPosition(46, 75)
p2.setPosition(61, 74)
p3.setPosition(80, 74)
p4.setPosition(96, 74)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1
    11f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11
    111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1111
    11111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111
    111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111
    1111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111
    111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111
    1111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111
    11111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111111
    111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111
    11111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111
    111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111
    1111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111
    11111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111111111111111
    1111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111
    11111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111111111111111111
    111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111
    11111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111
    111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111
    1111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111111
    11111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111111111111111111111111111
    1111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111
    11111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111
    111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111
    1111111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111111111111111
    111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111
    1111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111111111111111111
    11111111111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1ffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111f111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111
    111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111
    111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111111111111111
    11111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111
    1111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111
    1111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111111111111111111111111111111
    111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111
    11111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111
    11111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111
    1111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111
    111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111
    111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111
    11111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111
    1111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111
    111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111
    111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111
    11111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111
    1111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111
    1111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111
    111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111
    11111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111
    11111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111
    1111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111
    111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111
    11111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111
    11111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111
    1111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111
    111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111
    111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111
    11111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111
    1111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111
    1111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111
    111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111
    11111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111
    11111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111
    1111111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111
    111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111
    11111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111
    11111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111
    1111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
    111111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111
    111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111
    11111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111
    1111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111
    1111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11
    111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1
    11111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f
    `)
mySprite.setStayInScreen(true)
