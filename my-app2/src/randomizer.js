export function getRandomSushiDeal() {
	const sushiDeals = [
		// Listar alla sushi-rätter!
		'1. 7 bitar sushi - 84 kr',
		'2. Liten sushi - 99 kr',
		'3. Mellan sushi - 114 kr',
		'4. Mellan sushi med tonfisk - 114 kr',
		'5. Stor sushi - 159 kr',
		'6. Kockens stor sushi - 159 kr',
		'7. 20 bitar sushibar special - 229 kr',
		'8. Familje sushi - 309 kr',
		'9. Lax sushi - 129 kr',
		'10. Avokado sushi - 125 kr',
		'11. Lax & roll sushi - 129 kr',
		'12. Lax & avokado sushi - 129 kr',
		'13. Lax, avokado & roll sushi - 129kr',
		'14. Spicy & crispy lax sushi - 139 kr',
		'15. Grillad lax sushi - 139 kr',
		'16. Lax & räk sushi - 139 kr',
		'17. Lax, räk & roll sushi - 139 kr',
		'18. Avokado & räk sushi - 139 kr',
		'19. Avokado, räk & roll sushi - 139 kr',
		'20. Lax, räk & avokado sushi - 149 kr',
		'21. Hot & spicy sushi - 149 kr',
		'22. Vegansk sushi - 109 kr',
		'23. Mammas special sushi - 114 kr',
		'24. Spicy avokado sushi - 135 kr',
		'25. Sashimi (Liten/stor) - 129 kr/159 kr',
		'26. Sashimi sushi - 135 kr'
	];
	// Räknar ut ett slumpmässigt index för att välja en av sushirätterna som är listade ovanför.
	const randomIndex = Math.floor(Math.random() * sushiDeals.length);
	return sushiDeals[randomIndex];
}
