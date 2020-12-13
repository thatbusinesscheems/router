const router = extendContent(Wall, "router", {
	handleBulletHit(entity, bullet){
		this.super$handleBulletHit(entity, bullet);
		
		const vec = new Vec2();
		
		vec.trns(Angles.angle(entity.x, entity.y, bullet.x, bullet.y), this.size * Vars.tilesize / 2);
		
		if(Mathf.chance(this.lightningChance)){
			Lightning.create(entity.getTeam(), Color.valueOf("a9d8ff"), this.lightningDamage, vec.x + entity.x, vec.y + entity.y, bullet.rot() + 180, this.lightningLength + Mathf.random(0, 4));
		}
	}
});

router.lightningChance = 0.1;
router.lightningDamage = 19;
router.lightningLength = 13;