  SET IDENTITY_INSERT [dbo].[Tools] ON
Insert Into [dbo].[Tools] ([ToolId], [Name], [TechSpecs], [IsAvailable]) values (1,'Slefuitor Bosch' ,'Putere: 900 W \nRotatii in gol: 2.800–1.000/min \nDiametru disc: 125 mm', 1) 
 Insert Into [dbo].[Tools] ([ToolId], [Name], [TechSpecs], [IsAvailable]) values (2,'Masina de gaurit Bosch' ,'Putere nominala: 790 W \nTuratie in gol: 0 - 930/min. \nImpact: 2,7 J', 1) 
 Insert Into [dbo].[Tools] ([ToolId], [Name], [TechSpecs], [IsAvailable]) values (3,'Telemetru cu laser Bosch' ,'Domeniu de măsurare: 0,15 – 30,00 \nPrecizie de măsurare, normal: +/- 2 mm \nTimp de măsurare maxim.: 4 s', 1) 
 Insert Into [dbo].[Tools] ([ToolId], [Name], [TechSpecs], [IsAvailable]) values (4,'Polizor unghiular Dewalt' ,'Putere: 900 W \nViteza: 11800 /rpm \nDiamtru disc: 115 mm', 1) 
 Insert Into [dbo].[Tools] ([ToolId], [Name], [TechSpecs], [IsAvailable]) values (5,'Ferăstrău Skil ' ,'Putere: 800 W \nNr. lovituri în gol: 0-2700/minut\nAdâncime maximă de tăiere în lemn: 150 mm', 0) 
 Insert Into [dbo].[Tools] ([ToolId], [Name], [TechSpecs], [IsAvailable]) values (6,'Masina de curatat cu presiune Hitachi ' ,'Putere:1,6 kW  \nDebit apa 360 L/h \nPresiune 130 Bar max.', 0) 
 Insert Into [dbo].[Tools] ([ToolId], [Name], [TechSpecs], [IsAvailable]) values (7,'Nivela cu laser in cruce Leica' ,'Nivela cu laser in cruce\n+/- 3 & nbsp;\nVizibilitate interioară 25 m', 0) 
 SET IDENTITY_INSERT [dbo].[Tools] OFF
 
 SET IDENTITY_INSERT [dbo].[ToolImages] ON

 Insert Into [dbo].[ToolImages] ([ToolImageId], [ImageUrl], [ToolId]) values (1,'https://static11.edstatic.net/product_images/470x470/resize/angle-grinder-gws-9-115-144024-0601396007_nvn59cve.png?v=1',1)
 Insert Into [dbo].[ToolImages] ([ToolImageId], [ImageUrl], [ToolId]) values (2,'https://static11.edstatic.net/product_images/280x210/resize/cordless-drilldriver-gsr-18-2-li-plus-106808_qz3lz477.png?v=1',2)
 Insert Into [dbo].[ToolImages] ([ToolImageId], [ImageUrl], [ToolId]) values (3,'https://static11.edstatic.net/product_images/280x210/resize/laser-measure-glm-40-110296_vaid5uf0.png?v=1',3)
 Insert Into [dbo].[ToolImages] ([ToolImageId], [ImageUrl], [ToolId]) values (4,'https://static11.edstatic.net/product_images/470x470/resize/dewalt-dwe4156-qs-115mm-angle-grinder-900w-11800rpm_bk1cf9tt.jpg?v=1',4)
 Insert Into [dbo].[ToolImages] ([ToolImageId], [ImageUrl], [ToolId]) values (5,'https://static11.edstatic.net/product_images/470x470/resize/skil-1065-aa-szablyafo_854b9f4f.jpg?v=14',5)
 Insert Into [dbo].[ToolImages] ([ToolImageId], [ImageUrl], [ToolId]) values (6,'https://static9.edstatic.net/product_images/470x470/resize/aw130-l_4w5rfe0q.jpg?v=1',6)
 Insert Into [dbo].[ToolImages] ([ToolImageId], [ImageUrl], [ToolId]) values (7,'https://static9.edstatic.net/product_images/470x470/resize/l2leftreflectionc741305a1opng_rp3ff3ry.png?v=1',7)
 SET IDENTITY_INSERT [dbo].[ToolImages] OFF

 SET IDENTITY_INSERT [dbo].[Addresses] ON
INSERT INTO [dbo].[Addresses] ([AddressId], [AddressString], [City], [Country], [Longitude], [Latitude]) VALUES (1, N'Septimiu Albini 21', N'Cluj-Napoca', N'Romania', 101, 111)
INSERT INTO [dbo].[Addresses] ([AddressId], [AddressString], [City], [Country], [Longitude], [Latitude]) VALUES (2, N'Paris 2', N'Cluj-Napoca', N'Romania', 55, 4)
INSERT INTO [dbo].[Addresses] ([AddressId], [AddressString], [City], [Country], [Longitude], [Latitude]) VALUES (3, N'Teodor Mihali 40', N'Cluj-Napoca', N'Romania', 12, 257)
INSERT INTO [dbo].[Addresses] ([AddressId], [AddressString], [City], [Country], [Longitude], [Latitude]) VALUES (4, N'Alexandru Vaida Voevod 58-60', N'Cluj-Napoca', N'Romania', 452, 57)
INSERT INTO [dbo].[Addresses] ([AddressId], [AddressString], [City], [Country], [Longitude], [Latitude]) VALUES (5, N'M. Kogalniceanu 1', N'Cluj-Napoca', N'Romania', 736, 852)
INSERT INTO [dbo].[Addresses] ([AddressId], [AddressString], [City], [Country], [Longitude], [Latitude]) VALUES (6, N'Dunarii 10', N'Cluj-Napoca', N'Romania', 474, 457)
INSERT INTO [dbo].[Addresses] ([AddressId], [AddressString], [City], [Country], [Longitude], [Latitude]) VALUES (7, N'B. P. Hasdeu 50', N'Cluj-Napoca', N'Romania', 232, 532)
SET IDENTITY_INSERT [dbo].[Addresses] OFF

 SET IDENTITY_INSERT [dbo].[Users] ON
INSERT INTO [dbo].[Users] ([Id], [Email], [Password], [FirstName], [LastName], [Gender], [DateOfBirth], [PhoneNumber], [AddressId]) VALUES (1, 'amaior@tools.com', 'maior', 'Alexandra', 'Maior', '2', '1990-07-01', '0758962145', 1)
INSERT INTO [dbo].[Users] ([Id], [Email], [Password], [FirstName], [LastName], [Gender], [DateOfBirth], [PhoneNumber], [AddressId]) VALUES (2, 'atili@tools.com', 'tili', 'Adrian', 'Tili', '1', '1992-06-05', '0757565545', 2)
INSERT INTO [dbo].[Users] ([Id], [Email], [Password], [FirstName], [LastName], [Gender], [DateOfBirth], [PhoneNumber], [AddressId]) VALUES (3, 'ttrifon@tools.com', 'trifon', 'Titus', 'Trifon', '1', '1991-01-03', '0744523241', 3)
INSERT INTO [dbo].[Users] ([Id], [Email], [Password], [FirstName], [LastName], [Gender], [DateOfBirth], [PhoneNumber], [AddressId]) VALUES (4, 'ddumitrescu@tools.com', 'dumitrescu', 'Dragos', 'Dumitrescu', '1', '1994-07-01', '0732589703', 4)
INSERT INTO [dbo].[Users] ([Id], [Email], [Password], [FirstName], [LastName], [Gender], [DateOfBirth], [PhoneNumber], [AddressId]) VALUES (5, 'ctanase@tools.com', 'tanase', 'Cosmin', 'Tanase', '1', '1992-04-11', '0742026149', 5)
INSERT INTO [dbo].[Users] ([Id], [Email], [Password], [FirstName], [LastName], [Gender], [DateOfBirth], [PhoneNumber], [AddressId]) VALUES (6, 'dgroza@tools.com', 'groza', 'Daniel', 'Groza', '1', '1991-07-10', '0723698547', 6)
INSERT INTO [dbo].[Users] ([Id], [Email], [Password], [FirstName], [LastName], [Gender], [DateOfBirth], [PhoneNumber], [AddressId]) VALUES (7, 'bmaier@tools.com', 'maier', 'Bogdan', 'Maier', '1', '1990-12-12', '0755789520', 7)
SET IDENTITY_INSERT [dbo].[Users] OFF

SET IDENTITY_INSERT [dbo].[Categories] ON
INSERT INTO [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (1, 'Aparate de masura', 'contine aparate folosite la efectuarea de masuratori precum telemetre si nivele laser')
INSERT INTO [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (2, 'Scule cu acumulator', 'contine masini de gaurit si insurubat cu acumulator')
INSERT INTO [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (3, 'Masini de curatat', 'contine aspiratoare, masini de curatat cu presiune')
INSERT INTO [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (4, 'Slefuitoare, polizoare', 'contine slefuitoare cu banda, polizoare de banc, polizoare unghiulare')
INSERT INTO [dbo].[Categories] ([CategoryId], [Name], [Description]) VALUES (5, 'Fierastraie', 'contine fierastraie sabie, fierastraie circulare, fierastraie pendulare')
SET IDENTITY_INSERT [dbo].[Categories] OFF

SET IDENTITY_INSERT [dbo].[Advertisements] ON
INSERT INTO [dbo].[Advertisements] ([Id], [Title], [Description], [Type], [PeriodOfTime], [RentalConditions], [ReturnRequirements], [OwnerId], [ToolId], [CategoryId], [LocationId]) VALUES 
									(1, 'Ofer spre imprumut masina de gaurit / insurubat cu acumulator Bosch GSR 120-LI 12V Professional', 'Bosch GSR 120-LI este o masina de gaurit si insurubat de inalta performanta, oferind cu 20% imbunatatiri ale cuplului, comparativ cu GSR 1080-2-LI.
Ofera mai multa putere pentru utilizatori datorita angrenajului in 2 trepte ce asigura o forta de 30 Nm.', 'Profesional', '7d', 'A se uitiliza masina cu grija si atentie.', 'Sa se respecte ziua de restituire a masinii.', 1, 2, 2, 1)
INSERT INTO [dbo].[Advertisements] ([Id], [Title], [Description], [Type], [PeriodOfTime], [RentalConditions], [ReturnRequirements], [OwnerId], [ToolId], [CategoryId], [LocationId]) VALUES 
									(2, 'Imprumut Slefuitor Bosch Professional GWS 9-125', 'Masina de slefuit Bosch Professional GWS 9-125 este un model ce se remarca in clasa sa printr-o slefuire foarte fina si foarte precisa. ', 'Profesional', '3d', 'A se uitiliza masina cu grija si atentie.', 'Sa se respecte ziua de restituire a masinii.' , 2, 1, 4,2 )
INSERT INTO [dbo].[Advertisements] ([Id], [Title], [Description], [Type], [PeriodOfTime], [RentalConditions], [ReturnRequirements], [OwnerId], [ToolId], [CategoryId], [LocationId]) VALUES 
									(3, 'De imprumutat: Telemetru cu laser Bosch', 'Glm 50 este ideal pentru toti cei care au nevoie sa masure inaltimile si lungimile dintre diverse componente, sa calculeze ariile si volumele in munca de santier, fie ca sunt faintari, zugravi, zidari sau chiar oameni obisnuiti. Telemetrul cu laser produs de Bosch simplifica masurarea distantelor.', 'Profesional', '14d','A se uitiliza masina cu grija si atentie.', 'Sa se respecte ziua de restituire a masinii.' , 4, 3, 1, 4)
INSERT INTO [dbo].[Advertisements] ([Id], [Title], [Description], [Type], [PeriodOfTime], [RentalConditions], [ReturnRequirements], [OwnerId], [ToolId], [CategoryId], [LocationId]) VALUES 
									(4, 'Pentru profesionisti: Nivela cu laser in cruce Leica', 'Adaptorul magnetic permite cuplarea rapida si precisa la suprfete metalice, stalpi sau profile. Orificii speciale pentru fixare cu cleme sau cuie, filet pentru fixare 1/4” sau 5/8”. Poate fi rotit in 250° grade in jurul axei orizontale. Pornire rapida.', 'Profesional', '4d', 'A se uitiliza masina cu grija si atentie.', 'Sa se respecte ziua de restituire a masinii.' , 3,7 , 1,3)
INSERT INTO [dbo].[Advertisements] ([Id], [Title], [Description], [Type], [PeriodOfTime], [RentalConditions], [ReturnRequirements], [OwnerId], [ToolId], [CategoryId], [LocationId]) VALUES 
									(5, 'Ajutor la taierea obiectelor de bricolaj: Ferăstrău Skil' , 'Este util pentru majoritatea lucrarilor de taiere de bricolaj. Este si multilaterala, datorita capacitatii de taiere de 65 mm. Cu aceasta capacitate, se pot manui cu usurinta cele mai uzuale adancimi (ale scandurilor, grinzilor). Acest circular de mana este prevazut cu o serie de functii convenabile, ca de exemplu vizorul pentru linia de taiere, care asigura taierea cu precizie', 'Hobby', '1m','A se uitiliza masina cu grija si atentie.', 'Sa se respecte ziua de restituire a masinii.' , 1, 5, 5, 1)
INSERT INTO [dbo].[Advertisements] ([Id], [Title], [Description], [Type], [PeriodOfTime], [RentalConditions], [ReturnRequirements], [OwnerId], [ToolId], [CategoryId], [LocationId]) VALUES 
									(6, 'Inchiriez aparat de spalat cu presiune Hitachi' , ' Furtun de Inalta-presiune : 10m\n Conceput Vertical pentru depozitare facila\n Compacta si greutate redusa\n Conceputa cu protectie termica\n Cu maner pentru manevrare usoara', 'Hobby', '10d','A se uitiliza masina cu grija si atentie.', 'Sa se respecte ziua de restituire a masinii.' , 5, 6, 3, 5)
INSERT INTO [dbo].[Advertisements] ([Id], [Title], [Description], [Type], [PeriodOfTime], [RentalConditions], [ReturnRequirements], [OwnerId], [ToolId], [CategoryId], [LocationId]) VALUES 
									(7, 'Spre inchiriere: Polizor unghiular Dewalt' , 'Polizorul are 6 viteze de lucru, fapt ce ofera utilizatorului posibilitatea de a selecta viteza care se potriveste cel mai bine materialului de lucru: metal, ciment, piatra, lemn,fier, plastic. Gama larga de materiale este un mare avantaj deoarece permite oricarui utilizator sa obtina rezultate de inalta calitate, in special instalatorilor, electricienilor, zidarilor, la lucrarile de finisare din domeniul lor. ', 'Profesional', '7d','A se uitiliza masina cu grija si atentie.', 'Sa se respecte ziua de restituire a masinii.' , 6, 4, 4, 6)

SET IDENTITY_INSERT [dbo].[Advertisements] OFF

SET IDENTITY_INSERT [dbo].[Notifications] ON
INSERT INTO [dbo].[Notifications] ([NotificationId], [email], [AdvertisementId]) VALUES (1, 'bmaier@tools.com', 1)
INSERT INTO [dbo].[Notifications] ([NotificationId], [email], [AdvertisementId]) VALUES (2, 'bmaier@tools.com', 2)
INSERT INTO [dbo].[Notifications] ([NotificationId], [email], [AdvertisementId]) VALUES (3, 'atili@tools.com', 3)
INSERT INTO [dbo].[Notifications] ([NotificationId], [email], [AdvertisementId]) VALUES (4, 'ttrifon@tools.com', 4)
SET IDENTITY_INSERT [dbo].[Notifications] OFF

SET IDENTITY_INSERT [dbo].[Rentals] ON
INSERT INTO [dbo].[Rentals] ([RentalId], [StartTime], [EndTime], [IntialState], [FinalState], [AdvertisementId]) VALUES (1, '2018-05-05', '2018-05-10', '3', '3', 5)
INSERT INTO [dbo].[Rentals] ([RentalId], [StartTime], [EndTime], [IntialState], [FinalState], [AdvertisementId]) VALUES (2, '2018-09-10', '2018-09-15', '3', '2', 5)
INSERT INTO [dbo].[Rentals] ([RentalId], [StartTime], [EndTime], [IntialState], [FinalState], [AdvertisementId]) VALUES (3, '2018-10-16', '2018-10-26', '3', '3', 6)
INSERT INTO [dbo].[Rentals] ([RentalId], [StartTime], [EndTime], [IntialState], [FinalState], [AdvertisementId]) VALUES (4, '2018-11-08', '2018-11-10', '2', '2', 1)
INSERT INTO [dbo].[Rentals] ([RentalId], [StartTime], [EndTime], [IntialState], [FinalState], [AdvertisementId]) VALUES (5, '2018-12-20', '2018-12-20', '3', '3', 1)
INSERT INTO [dbo].[Rentals] ([RentalId], [StartTime], [EndTime], [IntialState], [FinalState], [AdvertisementId]) VALUES (6, '2019-01-01', '2019-01-01', '3', '3', 2)
INSERT INTO [dbo].[Rentals] ([RentalId], [StartTime], [EndTime], [IntialState], [FinalState], [AdvertisementId]) VALUES (7, '2019-01-05', '2019-01-05', '3', '3', 3)
INSERT INTO [dbo].[Rentals] ([RentalId], [StartTime], [EndTime], [IntialState], [FinalState], [AdvertisementId]) VALUES (8, '2019-01-09', '2019-01-09', '3', '3', 4)
SET IDENTITY_INSERT [dbo].[Rentals] OFF

SET IDENTITY_INSERT [dbo].[Reviews] ON
INSERT INTO [dbo].[Reviews] ([ReviewId], [Text], [Rating], [AdvertisementId]) VALUES (1, 'Masina s-a comportat exemplar, iar comunicarea cu propietarul a fost foarte buna.', 5, 5)
INSERT INTO [dbo].[Reviews] ([ReviewId], [Text], [Rating], [AdvertisementId]) VALUES (2, 'Buna.', 4, 5)
INSERT INTO [dbo].[Reviews] ([ReviewId], [Text], [Rating], [AdvertisementId]) VALUES (3, 'Exact cum zice in descriere. Mi-a fost de real folos.', 5, 6)
INSERT INTO [dbo].[Reviews] ([ReviewId], [Text], [Rating], [AdvertisementId]) VALUES (4, 'Masina in stare buna, iar proprietarul foarte deschis - mi-a oferit si niste sfaturi.', 5, 1)
SET IDENTITY_INSERT [dbo].[Reviews] OFF

