// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('tiny_silica').displayName('Silica Dust')
	
	event.create('flux').displayName('Flux')
	event.create('life_crystal').displayName('Life Gem')
	
	event.create('tiny_hematite').displayName('Tiny Hematite Dust')
	event.create('hematite').displayName('Hematite Dust')
	event.create('poor_iron_ingot').displayName('Poor Iron Ingot')
	event.create('poor_iron').displayName('Poor Iron')
	event.create('poor_iron_sheet').displayName('Poor Iron Sheet')
	
	event.create('tiny_sulfur').displayName('Tiny Sulfur')
	event.create('andesite_threads').displayName('Andesite Threads')
	event.create('andesite_thread_bundle').displayName('Bundle Of Andesite Threads')
	event.create('andesite_cloth').displayName('Andesite Cloth')
	event.create('andesite_alloy_mixture').displayName('Andesite Mixture')
	event.create('chipped_bone').displayName('Chipped Bone')
	event.create('bottled_sludge').displayName('Bottled Sludge')
	event.create('weaving_sticks').displayName('Weaving Sticks').unstackable()
	
	event.create('broken_cooking_pot').displayName('Broken Cooking Pot').unstackable()
	
	event.create('water_bit').displayName('Hydrated Orb Piece')
	
	event.create('climate_information').displayName('Environment Reader').unstackable()
	
	event.create('catalyst').displayName('§dCATALST').unstackable().tooltip('§e§oYour key to the future.')
	
	event.create('dry_clay').displayName('Dry Clay')
	
	event.create('cactus_piece').displayName('Cactus Piece').food(food => {
		food
    		.hunger(1)
    		.saturation(0.1)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
			.alwaysEdible()
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      		.fastToEat()//Like dried kelp
      		.eaten(ctx => {
				ctx.player.persistentData.water += 0.15
        	})
	}).tooltip('§b§oA little bit hydrating.')
	
	
	
	event.create('monster_jerky').food(food => {
		food
    		.hunger(2)
    		.saturation(1)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      		.fastToEat()//Like dried kelp
      		.meat()//Dogs are willing to eat it
      		.eaten(ctx => {
				ctx.player.persistentData.water -= 0.5
        	})
	})
})

ItemEvents.modification(event => {
})





StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block','falling').material('wood').hardness(1.0).displayName('Example Block')
	event.create('dust','falling').material('sand').hardness(0.5).displayName('Dust').tagBlock('minecraft:mineable/shovel')
	event.create('wet_dust').material('sand').hardness(0.5).displayName('Wet Dust').tagBlock('minecraft:mineable/shovel')
	event.create('mossy_dust').material('grass').hardness(0.75).displayName('Oasis Grass').tagBlock('minecraft:mineable/shovel')
	
	event.create('hydrator').material('stone').hardness(2.5).displayName('Dust Hydrator').tagBlock('minecraft:mineable/pickaxe').tagBlock('forge:relocation_not_supported')
	
	event.create('oasis_seed').material('stone').hardness(2.5).displayName('Oasis Seed').tagBlock('minecraft:mineable/pickaxe').tagBlock('forge:relocation_not_supported')
	
	event.create('hydrated_orb').material('glass').hardness(1.5).displayName('Hydrated Orb').tagBlock('minecraft:mineable/hoe')
})

StartupEvents.registry('mob_effect', event => {
  event.create('fading')
    .effectTick((entity, lvl) => {
      if (!entity.server) return
      entity.server.runCommandSilent(`effect give ${entity.uuid} darkness 1 0 true`)
	  entity.server.runCommandSilent(`effect give ${entity.uuid} mining_fatigue 1 1 true`)
    }) 
    .color(Color.GRAY)
}) 

global.hydration = event => {
	
}