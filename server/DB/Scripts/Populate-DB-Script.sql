USE NettrotDB;
GO

-- Add test user
INSERT INTO Users (Username,PasswordHash,Email)
VALUES ('admin', 'admin', 'admin@exapmle.com')

INSERT INTO Products (Name, ProductCategory, Price, Stock, Description, ImageURL)
VALUES 
    -- Telt
    ('2-persons vantett', 'Telt', 499.99, 15, 'Vantett telt for 2 personer, blir ikke varmt om sommeren heller, top kvalitet, og eget innebygd rom for katter!', '/images/telt/telt1.jpg'),
    ('Big n Comfy', 'Telt', 5999.99, 20, 'Ultra komfort, som et hotell. Du vil ikke angre, KJ�P.', '/images/telt/telt2.jpg'),
    ('Teltiboy', 'Telt', 666.00, 666, 'It is what it is, right? Buy :)', '/images/telt/telt3.jpg'),
    ('Mountain Peak', 'Telt', 1299.50, 12, 'Perfekt for fjellturer, lett og v�rbestandig.', '/images/telt/telt4.jpg'),
    ('Urban Escape', 'Telt', 899.99, 25, 'Kompakt telt ideelt for byferier og festivalsbruk.', '/images/telt/telt5.jpg'),
    ('Eco Dome', 'Telt', 1499.99, 30, 'Milj�vennlig telt laget av resirkulerte materialer.', '/images/telt/telt6.jpg'),
    ('Family Haven', 'Telt', 1999.99, 10, 'Perfekt for familiecamping, med separate rom.', '/images/telt/telt7.jpg'),
    ('Night Sky', 'Telt', 799.99, 20, 'Innebygd stjerneskue-design, �pent takpanel.', '/images/telt/telt8.jpg'),
    ('Rain Shelter', 'Telt', 549.99, 15, 'Ekstra regnsikkert for v�te sesonger.', '/images/telt/telt9.jpg'),
    ('The Fortress', 'Telt', 2999.99, 5, 'Ekstra robust og slitesterkt for t�ffe forhold.', '/images/telt/telt10.jpg'),
    ('Desert Breeze', 'Telt', 1099.99, 18, 'Designet for varme klima med god ventilasjon.', '/images/telt/telt11.jpg'),
    ('Snow Warrior', 'Telt', 1899.99, 12, 'Ekstra isolasjon for vinterforhold.', '/images/telt/telt12.jpg'),
    ('Backpacker Lite', 'Telt', 399.99, 50, 'Superlett for solo backpacking.', '/images/telt/telt13.jpg'),
    ('Green Retreat', 'Telt', 1399.99, 15, 'Stort og komfortabelt, flott for naturutforskning.', '/images/telt/telt14.jpg'),
    ('Quick Pop-up', 'Telt', 499.99, 40, 'Pop-up telt som settes opp p� sekunder.', '/images/telt/telt15.jpg'),
    ('Forest Cabin', 'Telt', 2499.99, 10, 'Luksuri�s telting med tre-inspirert design.', '/images/telt/telt16.jpg'),
    ('Beach Shade', 'Telt', 299.99, 50, 'Perfekt for strender, lett og praktisk.', '/images/telt/telt17.jpg'),
    ('Adventure XL', 'Telt', 3999.99, 8, 'For eventyrlystne, stor plass og god ventilasjon.', '/images/telt/telt18.jpg'),
    ('Super Shelter', 'Telt', 599.99, 22, 'Robust for alle typer v�r.', '/images/telt/telt19.jpg'),
    ('Camping Deluxe', 'Telt', 899.99, 30, 'Luksustelt med mange funksjoner for camping.', '/images/telt/telt20.jpg'),

    -- Suger�r
    ('Eco Straw', 'Suger�r', 29.99, 100, 'Milj�vennlig suger�r laget av bambus.', '/images/suger�r/sugeror1.jpg'),
    ('Rainbow Straw', 'Suger�r', 19.99, 150, 'Fargerikt st�l-suger�r som kan brukes om og om igjen.', '/images/suger�r/sugeror2.jpg'),
    ('Gold Straw', 'Suger�r', 39.99, 100, 'Elegant suger�r i gullfinish.', '/images/suger�r/sugeror3.jpg'),
    ('Paper Straw', 'Suger�r', 5.99, 300, 'Biologisk nedbrytbart papir suger�r.', '/images/suger�r/sugeror4.jpg'),
    ('Silicone Flex', 'Suger�r', 24.99, 200, 'Fleksibelt silikonsuger�r for alle anledninger.', '/images/suger�r/sugeror5.jpg'),
    ('Travel Straw', 'Suger�r', 49.99, 50, 'Sammenleggbart suger�r for reisende.', '/images/suger�r/sugeror6.jpg'),
    ('Colorful Twist', 'Suger�r', 15.99, 180, 'Twist-design i ulike farger.', '/images/suger�r/sugeror7.jpg'),
    ('Luxury Straw', 'Suger�r', 59.99, 30, 'Luksuri�st suger�r i ekte s�lv.', '/images/suger�r/sugeror8.jpg'),
    ('Bamboo Classic', 'Suger�r', 29.99, 100, 'Klassisk bambus-suger�r.', '/images/suger�r/sugeror9.jpg'),
    ('Metallic Set', 'Suger�r', 39.99, 100, 'Sett med fire metall-suger�r og rengj�ringsb�rste.', '/images/suger�r/sugeror10.jpg'),
    ('Kid Friendly', 'Suger�r', 9.99, 150, 'Mykt silikon for barn.', '/images/suger�r/sugeror11.jpg'),
    ('Eco-Friendly Straw', 'Suger�r', 19.99, 120, 'Milj�vennlig st�l-suger�r.', '/images/suger�r/sugeror12.jpg'),
    ('Reusable Rainbow', 'Suger�r', 17.99, 100, 'Regnbuefarget st�l-suger�r.', '/images/suger�r/sugeror13.jpg'),
    ('Collapsible Straw', 'Suger�r', 29.99, 100, 'Sammenleggbart og lett � ta med.', '/images/suger�r/sugeror14.jpg'),
    ('Biodegradable Straw', 'Suger�r', 5.99, 200, 'Biologisk nedbrytbart suger�r.', '/images/suger�r/sugeror15.jpg'),
    ('Copper Straw', 'Suger�r', 39.99, 50, 'Stilig suger�r i kobber.', '/images/suger�r/sugeror16.jpg'),
    ('Neon Flex', 'Suger�r', 15.99, 130, 'Neonfarget, fleksibelt suger�r.', '/images/suger�r/sugeror17.jpg'),
    ('Wide Smoothie', 'Suger�r', 14.99, 120, 'Bred suger�r perfekt for smoothies.', '/images/suger�r/sugeror18.jpg'),
    ('Glitter Straw', 'Suger�r', 25.99, 75, 'Glitrende suger�r for fester.', '/images/suger�r/sugeror19.jpg'),
    ('Glass Straw', 'Suger�r', 29.99, 60, 'Suger�r laget av herdet glass.', '/images/suger�r/sugeror20.jpg'),

    -- Finlandshetter
    ('Windbreaker Hood', 'Finlandshette', 149.99, 50, 'Beskyttende mot vind og kulde.', '/images/hette/finlandshette1.jpg'),
    ('Thermo Face', 'Finlandshette', 199.99, 45, 'Holder deg varm i kulden.', '/images/hette/finlandshette2.jpg'),
    ('Frost Shield', 'Finlandshette', 129.99, 40, 'Vindtett for ekstra beskyttelse.', '/images/hette/finlandshette3.jpg'),
    ('Snow Guard', 'Finlandshette', 159.99, 30, 'Ekstra beskyttelse for vinterv�r.', '/images/hette/finlandshette4.jpg'),
    ('Camouflage Balaclava', 'Finlandshette', 179.99, 25, 'Perfekt for jakt og uteliv.', '/images/hette/finlandshette5.jpg'),
    ('Classic Balaclava', 'Finlandshette', 99.99, 60, 'Tradisjonell finlandshette.', '/images/hette/finlandshette6.jpg'),
    ('Winter Warrior', 'Finlandshette', 249.99, 35, 'Varm og v�rbestandig.', '/images/hette/finlandshette7.jpg'),
    ('Insulated Mask', 'Finlandshette', 189.99, 40, 'F�ret med ekstra isolasjon.', '/images/hette/finlandshette8.jpg'),
    ('Arctic Shield', 'Finlandshette', 219.99, 25, 'Designet for ekstrem kulde.', '/images/hette/finlandshette9.jpg'),
    ('Fleece Balaclava', 'Finlandshette', 109.99, 20, 'Din gode Fleecevenn.','/images/hette/finlandshette10.jpg');


INSERT INTO Products (Name, ProductCategory, Price, Stock, Description, ImageURL)
VALUES 
('SjokoladeSIGG', 'Sigaretter', 20000.00, 2, 'Verdens aller beste sjokolade sigg, det er begrenset lager p� disse, s� her gjelder det � v�re kjapp! Sjokoladesigggen vil gi deg en spennende oppdagelse, og bny p� nye f�lelser.', '/images/sigg/Sjokoladesigg.jpg');


DELETE FROM Products