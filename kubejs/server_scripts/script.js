// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:stick' })
	event.remove({ type: 'create:mixing', output: 'create:brass_ingot' })
	event.remove({ output: 'minecraft:bone_block' })
	event.remove({ mod: 'ad_astra' })
	
	event.recipes.createsifterSifting([Item.of('kubejs:andesite_threads').withChance(0.35).toJson(),Item.of('kubejs:chipped_bone').withChance(0.20).toJson(),Item.of('mekanism:salt').withChance(0.20).toJson(),Item.of('kubejs:dry_clay').withChance(0.15).toJson(),Item.of('kubejs:tiny_hematite').withChance(0.10).toJson(),Item.of('minecraft:hanging_roots').withChance(0.10).toJson(),Item.of('minecraft:rotten_flesh').withChance(0.02).toJson()], ['kubejs:dust','createsifter:string_mesh'])
	
	event.recipes.createsifterSifting([Item.of('kubejs:tiny_hematite').withChance(0.25).toJson(),Item.of('kubejs:tiny_hematite').withChance(0.20).toJson(),Item.of('create:copper_nugget').withChance(0.15).toJson(),Item.of('create:copper_nugget').withChance(0.15).toJson(),Item.of('kubejs:hematite').withChance(0.05).toJson(),Item.of('mekanism:dirty_dust_iron').withChance(0.02).toJson()], ['kubejs:dust','createsifter:andesite_mesh'])
	
	
	event.recipes.createsifterSifting([Item.of('kubejs:dry_clay').withChance(0.25).toJson(),Item.of('kubejs:andesite_threads').withChance(0.25).toJson()], ['kubejs:dust','createsifter:zinc_mesh'])	
	
	
	event.shaped(
	  Item.of('minecraft:bone_block', 1), 
	  [ 
		'AA', // arg 2: the shape (array of strings)
		'AA'  
	  ],
	  {
		A: 'minecraft:bone', 
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:bone_block', 1), 
	  [ 
		'AAA', // arg 2: the shape (array of strings)
		'AAA',
		'AAA'
	  ],
	  {
		A: 'kubejs:chipped_bone', 
	  }
	)
	
	
	event.shaped(
	  Item.of('minecraft:andesite', 2), 
	  [ 
		'AAA', // arg 2: the shape (array of strings)
		'ABA',
		'AAA'
	  ],
	  {
		A: 'kubejs:dry_clay', 
		B: 'kubejs:andesite_cloth'
	  }
	)
	
	event.shaped(
	  Item.of('kubejs:catalyst', 1), 
	  [ 
		'ACA', // arg 2: the shape (array of strings)
		'ABA',
		'ACA'
	  ],
	  {
		A: 'minecraft:amethyst_shard', 
		B: 'minecraft:iron_ingot',
		C: 'minecraft:spider_eye'
	  }
	)
	
	event.shaped(
	  Item.of('kubejs:hydrator', 1), 
	  [ 
		'ACA', // arg 2: the shape (array of strings)
		'ABA',
		'ACA'
	  ],
	  {
		A: 'create:brass_sheet', 
		B: 'kubejs:catalyst',
		C: 'create:mechanical_pump'
	  }
	)
	
	event.shaped(
	  Item.of('kubejs:hematite', 1), 
	  [ 
		'AA', // arg 2: the shape (array of strings)
		'AA'  
	  ],
	  {
		A: 'kubejs:tiny_hematite', 
	  }
	)
	
	event.smelting('3x kubejs:poor_iron', 'kubejs:hematite')
	
	event.smelting('create:andesite_alloy', 'kubejs:andesite_alloy_mixture')
	
	event.shaped(
	  Item.of('kubejs:poor_iron_ingot', 1), 
	  [ 
		'AA', // arg 2: the shape (array of strings)
		'AA'  
	  ],
	  {
		A: 'kubejs:poor_iron', 
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:furnace', 1), 
	  [ 
		'AAA', // arg 2: the shape (array of strings)
		'CBC'  
	  ],
	  {
		A: 'minecraft:clay_ball',
		B: 'kubejs:andesite_cloth',
		C: 'create:limestone'
	  }
	)
	
	event.shaped(
	  Item.of('botanypots:light_gray_concrete_botany_pot', 1), 
	  [ 
		'BAB', // arg 2: the shape (array of strings)
		'BBB'  
	  ],
	  {
		A: 'minecraft:flower_pot',
		B: 'kubejs:andesite_cloth'
	  }
	)
	
	event.shaped(
	  Item.of('create:millstone', 1), 
	  [ 
		'A', // arg 2: the shape (array of strings)
		'B',
		'C'
	  ],
	  {
		A: {tag:'extendedgears:small_cogwheel'},
		B: 'create:andesite_casing',
		C: 'create:limestone'
	  }
	)
	
	event.shaped(
	  Item.of('create:mechanical_press', 1), 
	  [ 
		' A ', // arg 2: the shape (array of strings)
		' B ',
		'CCC'
	  ],
	  {
		A: 'create:shaft',
		B: 'create:andesite_casing',
		C: 'kubejs:poor_iron_ingot'
	  }
	)
	
	event.shaped(
	  Item.of('kubejs:life_crystal', 1), 
	  [ 
		'CAC', // arg 2: the shape (array of strings)
		'ABA',
		'CAC'
	  ],
	  {
		A: 'kubejs:hydrated_orb',
		B: 'minecraft:spider_eye',
		C: 'kubejs:hematite'
	  }
	)
	
	event.shaped(
	  Item.of('create:windmill_bearing', 1), 
	  [ 
		'A', // arg 2: the shape (array of strings)
		'B',
		'C'
	  ],
	  {
		A: 'kubejs:poor_iron_sheet',
		B: 'create:andesite_casing',
		C: 'create:shaft'
	  }
	)
	
	
	event.recipes.create.pressing('kubejs:poor_iron_sheet', 'kubejs:poor_iron_ingot')
	event.recipes.create.compacting(['8x kubejs:dust',Item.of('kubejs:catalyst').withChance(0.995)], [Fluid.of('water', 250),'kubejs:catalyst'])
	
	
	
	event.recipes.createMilling([
		'mekanism:dirty_dust_iron',
		Item.of('kubejs:poor_iron',1).withChance(0.75),
		Item.of('kubejs:poor_iron',1).withChance(0.25)
	], 'kubejs:poor_iron_ingot')

	event.recipes.create.mixing(['6x minecraft:iron_nugget'], [Fluid.of('water', 250), 'mekanism:dirty_dust_iron'])
	
	event.recipes.create.mixing(['1x create:brass_nugget'], [Fluid.of('water', 50), '1x create:zinc_nugget', 'create:copper_nugget', 'kubejs:tiny_sulfur']).heated()
	
	event.recipes.create.mixing(['kubejs:tiny_sulfur',Item.of('kubejs:catalyst').withChance(0.995)], [Fluid.of('water', 50), 'kubejs:catalyst', 'mekanism:salt', 'mekanism:salt']).heated()
	
	event.recipes.create.mixing(['2x minecraft:andesite','kubejs:catalyst'], [Fluid.of('water', 250), 'kubejs:andesite_cloth', 'kubejs:catalyst'])
	
	
	event.recipes.create.compacting([Fluid.of('water', 25)], 'kubejs:cactus_piece')
	
	event.recipes.create.compacting(['minecraft:dried_kelp', 'kubejs:catalyst'], ['kubejs:monster_jerky','kubejs:catalyst']).heated()
	
	event.recipes.create.compacting(['3x kubejs:tiny_sulfur', Item.of('kubejs:tiny_sulfur').withChance(0.5), Item.of('minecraft:glowstone_dust').withChance(0.25)], ['minecraft:amethyst_shard','kubejs:hematite'])
	
	event.recipes.create.compacting(['create:rose_quartz'], ['minecraft:amethyst_shard','8x minecraft:redstone'])
	
	event.recipes.create.compacting([Fluid.of('water', 250),'minecraft:amethyst_shard'], 'kubejs:hydrated_orb')
	
	
	event.recipes.createCutting('5x kubejs:cactus_piece', 'minecraft:cactus').processingTime(50)
	
	
	event.shaped(
	  Item.of('create:whisk', 1), 
	  [ 
		' A ', // arg 2: the shape (array of strings)
		'CBC',
		'CCC'
	  ],
	  {
		A: 'kubejs:andesite_cloth',
		B: 'create:andesite_alloy',
		C: 'kubejs:poor_iron_sheet'
	  }
	)
	
	event.shaped(
	  Item.of('create:empty_blaze_burner', 1), 
	  [ 
		'ACA', // arg 2: the shape (array of strings)
		'CBC',
		'ACA'
	  ],
	  {
		A: 'minecraft:copper_ingot',
		B: 'minecraft:glowstone_dust',
		C: 'create:iron_sheet'
	  }
	)
	
	event.shaped(
	  Item.of('create:blaze_burner', 1), 
	  [ 
		' A ', // arg 2: the shape (array of strings)
		'ABA',
		' C '
	  ],
	  {
		A: 'mekanism:dust_sulfur',
		B: 'kubejs:catalyst',
		C: 'create:empty_blaze_burner'
	  }
	)
	
	event.shaped(
	  Item.of('kubejs:andesite_alloy_mixture', 1), 
	  [ 
		'AC', // arg 2: the shape (array of strings)
		'CB'  
	  ],
	  {
		A: 'minecraft:clay_ball',
		B: 'kubejs:andesite_cloth',
		C: 'kubejs:poor_iron'
	  }
	)
	
	event.shaped(
	  Item.of('farmersdelight:flint_knife', 1), 
	  [ 
		' B', // arg 2: the shape (array of strings)
		'A '  
	  ],
	  {
		A: 'minecraft:bone', 
		B: 'kubejs:chipped_bone'
	  }
	)
	
	
	
	event.shapeless(
	Item.of('kubejs:monster_jerky', 1), // arg 1: output
		[ 
		'2x minecraft:rotten_flesh',
		'mekanism:salt',
		'mekanism:salt'//arg 2: the array of inputs
		]
	)
	
	event.shapeless(
	Item.of('farmersdelight:cooking_pot', 1), // arg 1: output
		[ 
		'1x minecraft:bone',
		'2x kubejs:poor_iron',
		'kubejs:broken_cooking_pot'
		]
	)
	
	
	event.shapeless(
	Item.of('extendedgears:iron_cogwheel', 1), // arg 1: output
		[ 
		'create:shaft',
		'2x kubejs:poor_iron_ingot'
		]
	)
	
	
	event.shapeless(
	Item.of('extendedgears:shaftless_iron_cogwheel', 1), // arg 1: output
		[ 
		'kubejs:poor_iron',
		'kubejs:poor_iron_ingot'
		]
	)
	
	
	event.shapeless(
	Item.of('extendedgears:half_shaft_iron_cogwheel', 1), // arg 1: output
		[ 
		'create:andesite_alloy',
		'2x kubejs:poor_iron_ingot'
		]
	)
	
	event.shapeless(
	Item.of('create:andesite_casing', 1), // arg 1: output
		[ 
		'2x create:andesite_alloy',
		'minecraft:cactus'
		]
	)
	
	event.shapeless(
	Item.of('extendedgears:large_iron_cogwheel', 1), // arg 1: output
		[ 
		'extendedgears:iron_cogwheel',
		'2x kubejs:poor_iron_ingot'
		]
	)
	
	event.shapeless(
	Item.of('extendedgears:large_half_shaft_iron_cogwheel', 1), // arg 1: output
		[ 
		'extendedgears:half_shaft_iron_cogwheel',
		'2x kubejs:poor_iron_ingot'
		]
	)
	
	event.shapeless(
	Item.of('extendedgears:large_shaftless_iron_cogwheel', 1), // arg 1: output
		[ 
		'extendedgears:shaftless_iron_cogwheel',
		'1x kubejs:poor_iron_ingot',
		'kubejs:poor_iron'
		]
	)
	
	
	event.shapeless(
	Item.of('minecraft:potion', {Potion: "minecraft:water"}), // arg 1: output
		[ 
		'kubejs:water_bit',
		'minecraft:glass_bottle',
		]
	)
	
	
	event.shapeless(
	Item.of('minecraft:clay_ball', 1), // arg 1: output
		[ 
		'2x kubejs:cactus_piece',
		'kubejs:dry_clay'//arg 2: the array of inputs
		]
	)
	
	event.shapeless(
	Item.of('minecraft:clay_ball', 2), // arg 1: output
		[ 
		'kubejs:water_bit',
		'3x kubejs:dry_clay'//arg 2: the array of inputs
		]
	)
	
	event.shapeless(
	Item.of('minecraft:stick', 2), // arg 1: output
		[ 
		'5x minecraft:hanging_roots'//arg 2: the array of inputs
		]
	)
	
	event.shaped(
	  Item.of('createsifter:string_mesh', 1), 
	  [ 
		'AAA', // arg 2: the shape (array of strings)
		'ABA',
		'AAA'
	  ],
	  {
		A: 'minecraft:bone', 
		B: 'kubejs:andesite_threads'
	  }
	)
	
	
	event.shaped(
	  Item.of('farmersdelight:cutting_board', 1), 
	  [ 
		'AB', // arg 2: the shape (array of strings)  
	  ],
	  {
		A: 'minecraft:bone', 
		B: 'minecraft:cactus'
	  }
	)
	
	event.shaped(
	  Item.of('kubejs:andesite_thread_bundle', 1), 
	  [ 
		'AAA', // arg 2: the shape (array of strings)
		'A A',
		'AAA'
	  ],
	  {
		A: 'kubejs:andesite_threads', 
	  }
	)
	
	
	event.custom({
	  type: 'farmersdelight:cutting',
	  ingredients: [
		{ item: 'minecraft:cactus' }
	  ],
	  tool: { tag: 'forge:tools/knives' },
	  result: [
		{ item: 'kubejs:cactus_piece', count: 3 }
	  ]
	})
	
	
	event.custom({
	  type: 'farmersdelight:cutting',
	  ingredients: [
		{ item: 'kubejs:hydrated_orb' }
	  ],
	  tool: { tag: 'forge:tools/knives' },
	  result: [
		{ item: 'kubejs:water_bit', count: 3 }
	  ]
	})
	
	
	event.custom({
	  type: 'farmersdelight:cutting',
	  ingredients: [
		{ item: 'kubejs:andesite_thread_bundle' }
	  ],
	  tool: { item: 'kubejs:weaving_sticks' },
	  result: [
		{ item: 'kubejs:andesite_cloth', count: 1 },{ item: 'kubejs:andesite_threads', count: 3 },Item.of('kubejs:andesite_cloth').withChance(0.12).toJson()
	  ]
	})
	
	
	event.shaped(
	  Item.of('kubejs:weaving_sticks', 1), 
	  [ 
		' A', // arg 2: the shape (array of strings)
		'A '  
	  ],
	  {
		A: 'minecraft:bone', 
	  }
	)
	
	event.shaped(
	  Item.of('mekanism:dust_sulfur', 1), 
	  [ 
		'AA', // arg 2: the shape (array of strings)
		'AA'  
	  ],
	  {
		A: 'kubejs:tiny_sulfur', 
	})
	  
	event.shaped(
	  Item.of('kubejs:tiny_sulfur', 4), 
	  [ 
		'A'
	  ],
	  {
		A: 'mekanism:dust_sulfur', 
	})
	
	event.shaped(
	  Item.of('minecraft:stick', 3), 
	  [ 
		'A', // arg 2: the shape (array of strings)
		'A'  
	  ],
	  {
		A: {tag:'dustbound:true_planks'}, 
	  }
	)
	
	
	
	
	event.shaped(
	  Item.of('minecraft:bone', 1), 
	  [ 
		'AB', // arg 2: the shape (array of strings)
		'BA'  
	  ],
	  {
		A: 'kubejs:chipped_bone',
		B: 'kubejs:andesite_threads'
	  }
	)
	
	
	
	
	
})



ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

PlayerEvents.loggedIn(event => {
	event.player.paint({water: {type: 'text',
			text: '0.00',
			scale: 0.75,
			x: -20,
			y: -10,
			color: '#252590',
			alignY: 'bottom',
			alignX: 'right',
			draw: 'always'}})
	event.player.paint({heat: {type: 'text',
			text: '0.00',
			scale: 0.75,
			x: -20,
			y: -4,
			color: '#F92525',
			alignY: 'bottom',
			alignX: 'right',
			draw: 'always'}})
	
	event.player.paint({enviro: {type: 'text',
			text: 'status',
			scale: 0.75,
			x: -1,
			y: -18,
			color: '#25FF90',
			alignY: 'bottom',
			alignX: 'right',
			draw: 'always'}})
	event.player.paint({temp: {type: 'item', item:'minecraft:blue_candle', x: 7.5, y: 10, alignY:'bottom',alignX: 'right', w: 20, h: 20,draw:'always'}})

	
    
	
    if (!event.player.persistentData.contains('water')) {
        event.player.persistentData.water = 20.0
		event.player.persistentData.heat = 0.0
    }
})

ServerEvents.tags('item', e =>
{
  const planks = e.get('minecraft:planks').getObjectIds()
  planks.forEach(p => {
      e.add('dustbound:true_planks', p)
  })
  e.add('minecraft:planks', 'minecraft:cactus')
  e.add('minecraft:stone_tool_materials', 'minecraft:bone_block')
  e.add('forge:rods/wooden', 'minecraft:bone')
})





ItemEvents.rightClicked(event => {
	if (event.item?.id == "minecraft:glass_bottle") { 
		if (event.player.rayTrace().block?.id == "minecraft:water" || event.player.rayTrace().block?.properties.get("waterlogged").equals('true')) {
			
			event.cancel()
			event.player.inventoryMenu.broadcastFullState()
		}
	}
	if (event.item?.id == "minecraft:potion") {
		if (event.item?.nbt.get("Potion") == 'minecraft:water'){
			event.item.count -= 1
			event.player.give('minecraft:glass_bottle')
			event.player.runCommandSilent("/playsound minecraft:item.bottle.fill player @p")
			event.player.persistentData.water += 3
			event.cancel()
		}
	}
	
	if (event.item?.id == "kubejs:climate_information") {
		event.player.tell("§eCLIMATE INFORMATION")
		event.player.tell("§6Local Air Temperature: " + Math.round(event.player.persistentData.effectiveheat+20))
		event.player.tell("§cPlanetary Heat: " + (event.player.level.persistentData.heat+20))
		event.player.tell("§bPlanetary Humidity: " + (event.player.level.persistentData.humidity))
		
	}
})

ItemEvents.entityInteracted(event => {
})



//PLAYER TEMPERATURE HANDLING
PlayerEvents.tick(event=> {
	
	
	//environmental calculations
	const {player} = event
    const {x, y, z} = player
    let dimension = player.level.dimension
	
	if (!player.level.persistentData.contains('humidity')) {
		player.level.persistentData.humidity = 10
		player.level.persistentData.heat = 20
		
		if (dimension=='override:dust') {
			player.level.persistentData.humidity = -10
			player.level.persistentData.heat = 60
		}
	}
	
	let effectiveheat = player.level.persistentData.heat
	if (player.level.persistentData.humidity < 5) {
		if ( effectiveheat > 0 ) {
			effectiveheat = effectiveheat /  (((15-player.block.getSkyLight())/3)+1)
		}
	}
	
	if(event.player.persistentData.water > 0) {
		event.player.persistentData.water -= 0.0002
		
		
		
	}
	else{event.player.persistentData.water = 0}
	if (event.player.persistentData.water > 20) {event.player.persistentData.water = 20}
	//display
	event.player.paint({water: {text:"🌊" + Math.round(event.player.persistentData.water*10)/10}})
	event.player.paint({heat: {text:"🔥" + Math.round((event.player.persistentData.heat+ 20)*10 )/10 }})
	
	if(event.player.persistentData.water < 10) {
		
		if (player.persistentData.heat < 15 && player.persistentData.heat < effectiveheat) { 
			player.persistentData.heat += effectiveheat * 0.0001
		}
		
		if (player.persistentData.water > 5) {
			event.player.paint({temp: {item:'minecraft:cyan_candle'}})
		} else {
			event.player.paint({temp: {item:'minecraft:light_gray_candle'}})
			if (player.persistentData.heat < effectiveheat) { 
				player.persistentData.heat += effectiveheat * 0.0001
			}
		}
		
	} else {
	
	if (player.persistentData.heat > 5) {
		player.persistentData.heat -= 0.01
	}
	if (effectiveheat > 1) {
		event.player.persistentData.water -= (effectiveheat) * 0.00005
	}
	if(event.player.persistentData.water < 15) {
		event.player.paint({temp: {item:'minecraft:light_blue_candle'}})
	} else {
		event.player.paint({temp: {item:'minecraft:blue_candle'}})
	}
	
	}
	
	
	if (event.player.persistentData.heat > effectiveheat) {
		player.persistentData.heat -= 0.01
	}
	
	if (event.player.persistentData.heat > 10) {
		event.player.persistentData.water -= 0.0002
		event.player.paint({temp: {item:'minecraft:red_candle'}})
		player.server.runCommandSilent(`effect give ${player.uuid} slowness 1 1 true`)
		player.server.runCommandSilent(`effect give ${player.uuid} mining_fatigue 1 0 true`)
		player.server.runCommandSilent(`effect give ${player.uuid} weakness 1 0 true`)
		if (Math.random() > 0.995) {
			player.server.runCommandSilent(`effect give ${player.uuid} nausea 6 0 true`)
		}
	}
	
	if (event.player.persistentData.heat > 30 || player.persistentData.water <= 0) {
		event.player.paint({temp: {item:'minecraft:orange_candle'}})
		if (Math.random() > 0.9925) {
			player.server.runCommandSilent(`effect give ${player.uuid} tetra:bleeding 3 1 true`)
		}
	}
	
	
	
	
	
	player.persistentData.effectiveheat = effectiveheat
	
})

PlayerEvents.respawned(event => {
  event.player.potionEffects.add('kubejs:fading', 99999, 0, true, false)
  event.player.persistentData.water = 20.0
  event.player.persistentData.heat = 0.0
})



BlockEvents.placed(event => {
	
	if (event.block == 'kubejs:hydrator') {
		let newEntity = event.block.createEntity('minecraft:armor_stand')
		newEntity.mergeFullNBT('{Marker:1b}')
		newEntity.tags.add("Hydrator")
		newEntity.x += 0.5
		newEntity.y += 0.5
		newEntity.z += 0.5
		newEntity.spawn()
	}
	
})


ServerEvents.tick(event => {
	
	let entities = event.server.getEntities()
	
	for (let i = 0; i < entities.length; i++) {
		let entity = entities[i]
		if(entity.tags.contains("Hydrator")) {
			if (entity.block != 'kubejs:hydrator') {
				entity.kill()
			}
			let block_below = entity.block.offset(0,-1,0)
			if(block_below.id == 'minecraft:water' && block_below.properties.level == 0){
				
				
				for (let n=0;n<25;n++){
					let x = Math.round(Math.random() * 40) - 20
					let y = Math.round(Math.random() * 16) - 8
					let z = Math.round(Math.random() * 40) - 20
					
					let checkBlock = entity.level.getBlock(x+entity.x,y+entity.y,z+entity.z)
					
					if (checkBlock == 'kubejs:dust' && (x*x + z*z) < 400) {
						
						checkBlock.set('kubejs:wet_dust')
						
						if (Math.random() < 0.075) {
							block_below.set('minecraft:air')
						}
					}
				}
				
				
			}
			
		}
	}
})

function test(event) { 
	for (let x = -9; x < 10; x++) {
			for (let y = -9; y < 10; y++) {
				for (let z = -9; z < 10; z++) {
				
			}
		}
	}
}