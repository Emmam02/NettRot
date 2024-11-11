USE NettrotDB;
GO

-- Add test user
INSERT INTO Users (Username,PasswordHash,Email)
VALUES ('admin', 'admin', 'admin@exapmle.com')

INSERT INTO Products (Name, ProductCategory, Price, Stock, Description, ImageURL)
VALUES 
    -- Telt
    ('2-persons vantett', 'Telt', 499.99, 15, 'Vantett telt for 2 personer, blir ikke varmt om sommeren heller, top kvalitet, og eget innebygd rom for katter!', '/images/telt/telt1.jpg'),
    ('Big n Comfy', 'Telt', 5999.99, 20, 'Ultra komfort, som et hotell. Du vil ikke angre, KJØP.', '/images/telt/telt2.jpg'),
    ('Teltiboy', 'Telt', 666.00, 666, 'It is what it is, right? Buy :)', '/images/telt/telt3.jpg'),
    ('Mountain Peak', 'Telt', 1299.50, 12, 'Perfekt for fjellturer, lett og værbestandig.', '/images/telt/telt4.jpg'),
    ('Urban Escape', 'Telt', 899.99, 25, 'Kompakt telt ideelt for byferier og festivalsbruk.', '/images/telt/telt5.jpg'),
    ('Eco Dome', 'Telt', 1499.99, 30, 'Miljøvennlig telt laget av resirkulerte materialer.', '/images/telt/telt6.jpg'),
    ('Family Haven', 'Telt', 1999.99, 10, 'Perfekt for familiecamping, med separate rom.', '/images/telt/telt7.jpg'),
    ('Night Sky', 'Telt', 799.99, 20, 'Innebygd stjerneskue-design, åpent takpanel.', '/images/telt/telt8.jpg'),
    ('Rain Shelter', 'Telt', 549.99, 15, 'Ekstra regnsikkert for våte sesonger.', '/images/telt/telt9.jpg'),
    ('The Fortress', 'Telt', 2999.99, 5, 'Ekstra robust og slitesterkt for tøffe forhold.', '/images/telt/telt10.jpg'),
    ('Desert Breeze', 'Telt', 1099.99, 18, 'Designet for varme klima med god ventilasjon.', '/images/telt/telt11.jpg'),
    ('Snow Warrior', 'Telt', 1899.99, 12, 'Ekstra isolasjon for vinterforhold.', '/images/telt/telt12.jpg'),
    ('Backpacker Lite', 'Telt', 399.99, 50, 'Superlett for solo backpacking.', '/images/telt/telt13.jpg'),
    ('Green Retreat', 'Telt', 1399.99, 15, 'Stort og komfortabelt, flott for naturutforskning.', '/images/telt/telt14.jpg'),
    ('Quick Pop-up', 'Telt', 499.99, 40, 'Pop-up telt som settes opp på sekunder.', '/images/telt/telt15.jpg'),
    ('Forest Cabin', 'Telt', 2499.99, 10, 'Luksuriøs telting med tre-inspirert design.', '/images/telt/telt16.jpg'),
    ('Beach Shade', 'Telt', 299.99, 50, 'Perfekt for strender, lett og praktisk.', '/images/telt/telt17.jpg'),
    ('Adventure XL', 'Telt', 3999.99, 8, 'For eventyrlystne, stor plass og god ventilasjon.', '/images/telt/telt18.jpg'),
    ('Super Shelter', 'Telt', 599.99, 22, 'Robust for alle typer vær.', '/images/telt/telt19.jpg'),
    ('Camping Deluxe', 'Telt', 899.99, 30, 'Luksustelt med mange funksjoner for camping.', '/images/telt/telt20.jpg'),

    -- Sugerør
    ('Eco Straw', 'Sugerør', 29.99, 100, 'Miljøvennlig sugerør laget av bambus.', '/images/sugerør/sugeror1.jpg'),
    ('Rainbow Straw', 'Sugerør', 19.99, 150, 'Fargerikt stål-sugerør som kan brukes om og om igjen.', '/images/sugerør/sugeror2.jpg'),
    ('Gold Straw', 'Sugerør', 39.99, 100, 'Elegant sugerør i gullfinish.', '/images/sugerør/sugeror3.jpg'),
    ('Paper Straw', 'Sugerør', 5.99, 300, 'Biologisk nedbrytbart papir sugerør.', '/images/sugerør/sugeror4.jpg'),
    ('Silicone Flex', 'Sugerør', 24.99, 200, 'Fleksibelt silikonsugerør for alle anledninger.', '/images/sugerør/sugeror5.jpg'),
    ('Travel Straw', 'Sugerør', 49.99, 50, 'Sammenleggbart sugerør for reisende.', '/images/sugerør/sugeror6.jpg'),
    ('Colorful Twist', 'Sugerør', 15.99, 180, 'Twist-design i ulike farger.', '/images/sugerør/sugeror7.jpg'),
    ('Luxury Straw', 'Sugerør', 59.99, 30, 'Luksuriøst sugerør i ekte sølv.', '/images/sugerør/sugeror8.jpg'),
    ('Bamboo Classic', 'Sugerør', 29.99, 100, 'Klassisk bambus-sugerør.', '/images/sugerør/sugeror9.jpg'),
    ('Metallic Set', 'Sugerør', 39.99, 100, 'Sett med fire metall-sugerør og rengjøringsbørste.', '/images/sugerør/sugeror10.jpg'),
    ('Kid Friendly', 'Sugerør', 9.99, 150, 'Mykt silikon for barn.', '/images/sugerør/sugeror11.jpg'),
    ('Eco-Friendly Straw', 'Sugerør', 19.99, 120, 'Miljøvennlig stål-sugerør.', '/images/sugerør/sugeror12.jpg'),
    ('Reusable Rainbow', 'Sugerør', 17.99, 100, 'Regnbuefarget stål-sugerør.', '/images/sugerør/sugeror13.jpg'),
    ('Collapsible Straw', 'Sugerør', 29.99, 100, 'Sammenleggbart og lett å ta med.', '/images/sugerør/sugeror14.jpg'),
    ('Biodegradable Straw', 'Sugerør', 5.99, 200, 'Biologisk nedbrytbart sugerør.', '/images/sugerør/sugeror15.jpg'),
    ('Copper Straw', 'Sugerør', 39.99, 50, 'Stilig sugerør i kobber.', '/images/sugerør/sugeror16.jpg'),
    ('Neon Flex', 'Sugerør', 15.99, 130, 'Neonfarget, fleksibelt sugerør.', '/images/sugerør/sugeror17.jpg'),
    ('Wide Smoothie', 'Sugerør', 14.99, 120, 'Bred sugerør perfekt for smoothies.', '/images/sugerør/sugeror18.jpg'),
    ('Glitter Straw', 'Sugerør', 25.99, 75, 'Glitrende sugerør for fester.', '/images/sugerør/sugeror19.jpg'),
    ('Glass Straw', 'Sugerør', 29.99, 60, 'Sugerør laget av herdet glass.', '/images/sugerør/sugeror20.jpg'),

    -- Finlandshetter
    ('Windbreaker Hood', 'Finlandshette', 149.99, 50, 'Beskyttende mot vind og kulde.', '/images/hette/finlandshette1.jpg'),
    ('Thermo Face', 'Finlandshette', 199.99, 45, 'Holder deg varm i kulden.', '/images/hette/finlandshette2.jpg'),
    ('Frost Shield', 'Finlandshette', 129.99, 40, 'Vindtett for ekstra beskyttelse.', '/images/hette/finlandshette3.jpg'),
    ('Snow Guard', 'Finlandshette', 159.99, 30, 'Ekstra beskyttelse for vintervær.', '/images/hette/finlandshette4.jpg'),
    ('Camouflage Balaclava', 'Finlandshette', 179.99, 25, 'Perfekt for jakt og uteliv.', '/images/hette/finlandshette5.jpg'),
    ('Classic Balaclava', 'Finlandshette', 99.99, 60, 'Tradisjonell finlandshette.', '/images/hette/finlandshette6.jpg'),
    ('Winter Warrior', 'Finlandshette', 249.99, 35, 'Varm og værbestandig.', '/images/hette/finlandshette7.jpg'),
    ('Insulated Mask', 'Finlandshette', 189.99, 40, 'Fôret med ekstra isolasjon.', '/images/hette/finlandshette8.jpg'),
    ('Arctic Shield', 'Finlandshette', 219.99, 25, 'Designet for ekstrem kulde.', '/images/hette/finlandshette9.jpg'),
    ('Fleece Balaclava', 'Finlandshette', 109.99, 20, 'Din gode Fleecevenn.','/images/hette/finlandshette10.jpg');


INSERT INTO Products (Name, ProductCategory, Price, Stock, Description, ImageURL)
VALUES 
('SjokoladeSIGG', 'Sigaretter', 20000.00, 2, 'Verdens aller beste sjokolade sigg, det er begrenset lager på disse, så her gjelder det å være kjapp! Sjokoladesigggen vil gi deg en spennende oppdagelse, og bny på nye følelser.', '/images/sigg/Sjokoladesigg.jpg');


DELETE FROM Products