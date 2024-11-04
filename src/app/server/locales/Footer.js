"use server";
export async function getTranslation(lng, ns) {
  const en = {
    Footer: {
      Aire: "Air conditioning",
      Aliados: "Allies",
      Aviso: "Data Privacy Notice",
      Bolsa: "Job Dashboard",
      Certificaciones: "Certifications",
      Clientes: "Customers",
      Contacto: "Contact",
      Data: "Medical technology",
      Energia: "Electric systems",
      Especialidades: "Specialties",
      Fabricacion: "Equipment Manufacturing",
      Frase:
        "We want to get to know you and provide you with a tailored solution",
      Infraestructura: "Datacenter",
      Monitoreo: "Monitoring and Security",
      Recursos: "Resources",
      RSE: "ESR",
      Servicios: "Solutions",
      Sistemas: "Datacenter",
      Soporte: "Support and Installation",
      Terminos: "Terms and Conditions",
      NuestraMision: "Integrated Management System",
    },
    Aire: {
      Conocimiento: "SERVICES",
      ConocimientoText: "Our cooling systems guarantee:",
      Contacta: "CONTACT",
      ContactaText: "OUR EXPERTS",
      ContactaText2: "And get personalized advice for your project.",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7 THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you.",
      Experto: "Talk to an expert",
      greenbox:
        "In our solutions, we are always seeking to reduce both the environmental impact and carbon footprint while exceeding our clients' most demanding expectations.",
      HablarCons: "Talk to one of our experts",
      Hero1: "AIR CONDITIONING",
      Hero2: "We provide efficiency",
      Hero2sub: "And stability to the equipment",
      Hero3: "PRECISION COOLING",
      Hero4: "SATISFIED",
      Hero4Sub: "Customers",
      Hero4Text:
        "There is no one better than our customers to talk about our work; they trust our commitment to excellent service.",
      HeroText:
        "Which require a constant temperature to ensure business continuity and customer satisfaction. That is why we specialize in offering tailored solutions, capable of optimizing cooling and humidity at ideal levels, thus protecting the integrity and performance of critical infrastructure.",
      MasCasos: "More success stories",
      S1: "Energy efficiency",
      S10: "Wall Air Conditioning",
      S11: "Comfort Air Conditioning",
      S2: "Proactive Maintenance",
      S3: "Environmental sustainability",
      S4: "Specialized Technical Support",
      S5: "Chillers (Distribution of chilled water)",
      S6: "Condensers and Humidifiers",
      S7: "Perimeter Air Conditioning",
      S8: "Inrow Air Conditioning",
      S9: "Rack Type Air Conditioning",
    },
    Bolsa: {
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7 THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you.",
      Hero1: "RECRUITMENT",
      Hero2: "WE BELIEVE",
      Hero2sub: "IN A CULTURE",
      HeroText:
        "Based on excellent customer service, which encourages all our members to seek innovative alternatives to day-to-day challenges.",
      HeroText2:
        "Be part of the PS Service® team to complement your professional experience and maximize your capabilities.",
      Vacante1:
        "We stay at the forefront with the best talent; here you can find available positions.",
      VacanteElige: "CHOOSE THE POSITION YOU WANT TO APPLY TO",
    },
    Clientes: {
      Contacta: "CONTACT",
      ContactaText: "WITH OUR EXPERTS",
      ContactaText2: "And get personalized advice for your project",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7 THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you",
      HablarCons: "Talk to one of our experts",
      Hero1: "SATISFIED CUSTOMERS",
      Hero2: "EXCELLENT CUSTOMER SERVICE",
      Hero2sub: "AND WIDE EXPERIENCE",
      HeroText:
        "These are the factors that have helped us distinguish ourselves as a strategic supplier for our clients. Whether we centralize a project from its design or provide maintenance, the quality and speed of our service proudly represents us.",
      Soluciones1: "CENACE",
      Soluciones1Points:
        "Supply, installation, implementation, procurement, and maintenance of UPS systems greater than 100 kVA, electrical installations nationwide.",
      Soluciones2: "SEDENA",
      Soluciones2Points:
        "Modernization, supply, administration and operation of high shielding solutions in data centers, technology infrastructure, emergency plants, UPS and precision cooling",
      Soluciones3: "Walmart",
      Soluciones3Points:
        "Supply, installation, implementation, maintenance of UPS systems, electrical installations, air conditioning systems, emergency plants",
    },
    DataCenter: {
      Conocimiento: "Our data center solutions",
      ConocimientoText:
        "And mastering every phase of the data center infrastructure process, from innovative design to specialized installation and comprehensive maintenance; we can provide a full range of services.",
      Contacta: "CONTACT",
      ContactaText: "OUR EXPERTS",
      ContactaText2: "And get personalized advice for your project.",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7 THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you.",
      Descarga: "Download the catalog",
      Experto: "Talk to an expert",
      greenbox:
        "In our solutions, we are always seeking to reduce both the environmental impact and carbon footprint while exceeding our clients' most demanding expectations.",
      HablarCons: "Talk to an expert",
      Hero1: "INNOVATIVE SOLUTIONS IN DATA CENTER INFRASTRUCTURE",
      Hero2: "WE ARE THE MOST INNOVATIVE",
      Hero2sub: "FIRM IN SOLUTIONS",
      Hero3: "DATA CENTER SERVICES",
      Hero4: "SATISFIED",
      Hero4Sub: "CUSTOMERS",
      Hero4Text:
        "There is no one better than our clients to talk about our work,; they trust our commitment to excellent service.",
      HeroText:
        "Our extensive experience in comprehensive solutions provides us with a unique perspective and specialized knowledge to assist you in predictive, preventive, and corrective sizing in the implementation of your data center. We focus on addressing both current and future needs, ensuring maximum efficiency in infrastructure and costs.",
      MasCasos: "More success stories",
      S1: "Micro Data Centers",
      S10: "Virtualization",
      S2: "Storage",
      S3: "Performance and Efficiency in Datacenters",
      S4: "Processing",
      S5: "Networks",
      S6: "Data migration",
      S7: "Switches and Routers",
      S8: "Hyperconvergence",
      S9: "Cabinets",
      Servicios: "SOLUTIONS",
    },
    Energia: {
      Conocimiento: "No Interruptions",
      ConocimientoText:
        "Our expertise lies in the smooth implementation of our solutions, ensuring that your operations continue without interruptions.",
      Contacta: "CONTACT",
      ContactaText: "OUR EXPERTS",
      ContactaText2: "And get personalized advice for your project",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7 THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you.",
      Experto: "Talk to an expert",
      greenbox:
        "In our solutions, we are always seeking to reduce both the environmental impact and carbon footprint while exceeding our clients' most demanding expectations.",
      HablarCons: "Talk to one of our experts",
      Hero1: "DOMAIN IN IMPLEMENTATION OF ELECTRICAL SYSTEMS",
      Hero2: "WE REPRESENT 25 YEARS",
      Hero2sub: "OF RESOLUTIVE STRENGTH",
      Hero3: "Maximum Continuity",
      Hero4: "SATISFIED",
      Hero4Sub: "CUSTOMERS",
      Hero4Text:
        "There is no one better than our customers to talk about our work; they trust our commitment to excellent service.",
      HeroText:
        "Our comprehensive approach is demonstrated in the commitment to provide a service that ranges from design, supply and implementation to installation, operation, management, and after-sales support for electrical protection systems, energy storage services, and electrical and solar installations. With more than 25 years in the industry, our engineering service is a leader in advanced technologies for uninterruptible power systems. We are specialists in transformers, regulators, and shielding solutions against the most critical electrical disturbances in any network or brand.",
      MasCasos: "More success stories",
      S1: "Electrical substations",
      S10: "Energy Storage Systems",
      S11: "Electrical installations",
      S12: "Power Lifts",
      S13: "Lighting Projects",
      S14: "Strength Projects",
      S15: "Electrical and power quality studies (network code 2.0)",
      S2: "Emergency Plants",
      S3: "Static Switch Transfer",
      S4: "Harmonic Filters",
      S5: "Capacitor Banks",
      S6: "TVSS (Surge Voltage Suppressors)",
      S7: "Voltage Regulators",
      S8: "Uninterruptible Power Systems (UPS)",
      S9: "Electrical Power Distribution Units (PDU)",
      Servicios: "SERVICES",
    },
    Fabricacion: {
      Contacta: "CONTACT",
      ContactaText: "OUR EXPERTS",
      ContactaText2: "And get personalized advice for your project.",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7 THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you.",
      HablarCons: "Talk to one of our experts",
      Hero1: "MANUFACTURE OF COMPONENTS AND CABINETS",
      Hero2: "PERSONALIZED",
      Hero2sub: "ENGINEERING",
      HeroText:
        "We are manufacturers of solutions for prefabricated data centers, power and cooling, industrial cabinets, and electrical power shielding.",
      Soluciones1: "DATA CENTER SOLUTIONS",
      Soluciones1Points:
        "• Prefabricated data centers • Micro data centers • IT cabinets",
      Soluciones2: "INDUSTRIAL CABINETS",
      Soluciones2Points:
        "• Power Distribution Unit (PDU) • Automatic Transfer Switches (ATS) • Mechanical Bypasses • Battery Cabinets (VRLA-NiCad-Lithium)",
      Soluciones3: "INDUSTRY COOLING",
      Soluciones3Points: "• Precision perimeter, row, wall, and rack cooling",
    },
    Landing: {
      CertIso: "ISO Certifications",
      CertIso2: "Certifications",
      CertIsoText: "Endorsing our service processes",
      CertIsoText2: "In technology implementation",
      CertNom: "NOM Certifications",
      CertNomText: "For each of our engineers",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7  THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you.",
      Esp_aire: "AIR CONDITIONING",
      Esp_aire_text:
        "Precision and comfort air conditioning solutions to optimize cooling and humidity, from design and implementation to preventive and corrective maintenance.",
      Esp_datacenter: "DATA CENTER",
      Esp_datacenter_txt:
        "Comprehensive solutions for data centers, from sizing and design to implementation, operation, management, and preventive and corrective maintenance.",
      Esp_monitoreo: "MONITORING",
      Esp_monitoreo_text:
        "Management, operation, and absolute and optimized control of electrical, electronic, and electromechanical systems.",
      Esp_sistemas: "ELECTRIC SYSTEMS",
      Esp_sistemas_text:
        "Design, supply, implementation, installation, management, and preventive and corrective maintenance in electrical and solar energy systems.",
      Experto: "Talk to an expert",
      Hero1:
        "The omnisolution firm in MISSION-CRITICAL SYSTEMS and Data centers",
      Hero2: "WE ARE HIGH-LEVEL",
      Hero2sub: "ENGINEERING",
      Hero3: "SPECIALIZATION",
      Hero3Sub: "In mission-critical systems",
      Hero3Text:
        "Experience, knowledge, and infrastructure applied to the continuity of mission-critical systems.",
      Hero4: "INDUSTRY",
      Hero4Sub: "SOLUTIONS",
      Hero5: "SATISFIED",
      Hero5Sub: "CUSTOMERS",
      Hero5Text:
        "There is no one better than our customers to talk about our work.",
      Hero6: "CERTIFICATIONS",
      Hero6Text:
        "All our engineers are certified under safety, health, and organizational official standards.",
      Hero7: "BUSINESS",
      Hero7Sub: "ALLIES",
      Hero7Text:
        "We are the channel for nationally and internationally recognized companies to provide advice, sales, and service on our comprehensive solutions that include all the corporate experience and engineering.",
      Hero8: "JOIN",
      Hero8Sub: "OUR EXPERTS",
      Hero8Text:
        "At PS Service, we recognize talent; fill out our form and join our team",
      Hero9: "SOCIALLY RESPONSIBLE",
      Hero9Sub: "COMPANY",
      Hero9Text:
        "We are a company committed to a favorable organizational environment, which promotes the best practices and procedures to seek permanence through economic, legal, ethical, social, and environmental sustainability. We respect and promote human and labor rights, gender equality, the fight against violence towards vulnerable groups, the fight against discrimination, to provide an appropriate work environment, and demonstrate citizen social responsibility.",
      HeroText:
        "We have 25 years of experience in developing end-to-end solutions for mission-critical systems, data centers and air conditioning.",
      ISOTxt:
        "✔ 9001:2015 Process Quality System ✔ 14001:2015 Sustainability and Environment ✔ 27001:2022 Data Protection Certification ✔ 45001:2018 Health and Safety in the Work Environment",
      Leer: "Read more",
      MasCasos: "More success stories",
      QuieroSer: "I want to be an expert",
      Sol1Text:
        "Electrical solutions that balance from the substation to applications",
      Sol1Title: "Energy",
      Sol2Text:
        "We offer maintenance and advice on mission-critical, predictive, preventive, and corrective projects.",
      Sol2Title: "Support",
      Sol3Text: "Our own production line personalized for our customers' needs",
      Sol3Title: "Equipment Manufacturing",
      Sol4Text:
        "Design, implementation, and maintenance of data center infrastructure",
      Sol4Title: "Data center",
      Sol5Text:
        "Absolute management of electrical, electronic, and electromechanical systems",
      Sol5Title: "Monitoring and Security",
      Sol6Text:
        "Precision and comfort solutions to optimize cooling and humidity",
      Sol6Title: "Air conditioning",
      Sol7Text:
        "Innovation and protection of critical infrastructure in the medical sector with medical engineering solutions",
      Sol7Title: "Medical technology",
    },
    Monitoreo: {
      CertIso: "ISO Certifications",
      CertIso2: "Certifications",
      CertIsoText: "Endorsing our service processes",
      CertIsoText2: "In technology implementation",
      CertNom: "NOM Certifications",
      CertNomText: "For each of our engineers",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7  THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you.",
      Esp_aire: "AIR CONDITIONING",
      Esp_aire_text:
        "Precision and comfort air conditioning solutions to optimize cooling and humidity, from design and implementation to preventive and corrective maintenance.",
      Esp_datacenter: "DATA CENTER",
      Esp_datacenter_txt:
        "Comprehensive solutions for data centers, from sizing and design to implementation, operation, management, and preventive and corrective maintenance.",
      Esp_monitoreo: "MONITORING",
      Esp_monitoreo_text:
        "Management, operation, and absolute and optimized control of electrical, electronic, and electromechanical systems.",
      Esp_sistemas: "ELECTRIC SYSTEMS",
      Esp_sistemas_text:
        "Design, supply, implementation, installation, management, and preventive and corrective maintenance in electrical and solar energy systems.",
      Experto: "Talk to an expert",
      Hero1:
        "The omnisolution firm in MISSION-CRITICAL SYSTEMS and Data centers",
      Hero2: "WE ARE HIGH-LEVEL",
      Hero2sub: "ENGINEERING",
      Hero3: "SPECIALIZATION",
      Hero3Sub: "In mission-critical systems",
      Hero3Text:
        "Experience, knowledge, and infrastructure applied to the continuity of mission-critical systems.",
      Hero4: "INDUSTRY",
      Hero4Sub: "SOLUTIONS",
      Hero5: "SATISFIED",
      Hero5Sub: "CUSTOMERS",
      Hero5Text:
        "There is no one better than our customers to talk about our work.",
      Hero6: "CERTIFICATIONS",
      Hero6Text:
        "All our engineers are certified under safety, health, and organizational official standards.",
      Hero7: "BUSINESS",
      Hero7Sub: "ALLIES",
      Hero7Text:
        "We are the channel for nationally and internationally recognized companies to provide advice, sales, and service on our comprehensive solutions that include all the corporate experience and engineering.",
      Hero8: "JOIN",
      Hero8Sub: "OUR EXPERTS",
      Hero8Text:
        "At PS Service, we recognize talent; fill out our form and join our team",
      Hero9: "SOCIALLY RESPONSIBLE",
      Hero9Sub: "COMPANY",
      Hero9Text:
        "We are a company committed to a favorable organizational environment, which promotes the best practices and procedures to seek permanence through economic, legal, ethical, social, and environmental sustainability. We respect and promote human and labor rights, gender equality, the fight against violence towards vulnerable groups, the fight against discrimination, to provide an appropriate work environment, and demonstrate citizen social responsibility.",
      HeroText:
        "We have 25 years of experience in developing end-to-end solutions for mission-critical systems, data centers and air conditioning.",
      ISOTxt:
        "✔ 9001:2015 Process Quality System ✔ 14001:2015 Sustainability and Environment ✔ 27001:2022 Data Protection Certification ✔ 45001:2018 Health and Safety in the Work Environment",
      Leer: "Read more",
      MasCasos: "More success stories",
      QuieroSer: "I want to be an expert",
      Sol1Text:
        "Electrical solutions that balance from the substation to applications",
      Sol1Title: "Energy",
      Sol2Text:
        "We offer maintenance and advice on mission-critical, predictive, preventive, and corrective projects.",
      Sol2Title: "Support",
      Sol3Text: "Our own production line personalized for our customers' needs",
      Sol3Title: "Equipment Manufacturing",
      Sol4Text:
        "Design, implementation, and maintenance of data center infrastructure",
      Sol4Title: "Data center",
      Sol5Text:
        "Absolute management of electrical, electronic, and electromechanical systems",
      Sol5Title: "Monitoring and Security",
      Sol6Text:
        "Precision and comfort solutions to optimize cooling and humidity",
      Sol6Title: "Air conditioning",
      Sol7Text:
        "Innovation and protection of critical infrastructure in the medical sector with medical engineering solutions",
      Sol7Title: "Medical technology",
    },
    RSE: {
      Apoyo: "SUPPORT FOR VULNERABLE CHILDREN",
      ApoyoText:
        "Participation as a socially responsible organization with Fundación Teletón, which helps children with disabilities, cancer or autism.",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you",
      DeCons: "DOCUMENTS",
      Documentos: "CONSULTATION",
      Hero1: "COMMITMENT TO OUR COMMUNITY AND THE FUTURE",
      Hero2: "SOCIALLY RESPONSIBLE",
      Hero2sub: "COMPANY",
      Hero3: "SUSTAINABLE ACTIONS",
      HeroText:
        "We are a company committed to a favorable organizational environment, which promotes the best practices and procedures to seek permanence through economic, legal, ethical, social, and environmental sustainability. We respect and promote human and labor rights, gender equality, the fight against violence towards vulnerable groups, the fight against discrimination, to provide an appropriate work environment and demonstrate citizen social responsibility.",
      Manejo: "WASTE MANAGEMENT",
      ManejoText:
        "Strict adherence to the effective management of waste, batteries, refrigerants, and gases in accordance with international standards.",
      ProtCivil: "CIVIL DEFENSE",
      ProtCivilText:
        "Coordination and participation with the municipal program, for risk management and disaster prevention inside and outside the organization.",
      Respetamos:
        "We respect and promote human and labor rights, gender equality, the fight against violence towards vulnerable groups, the fight against discrimination, to provide an appropriate work environment and demonstrate citizen social responsibility.",
    },
    Soporte: {
      Contacta: "CONTACT",
      ContactaText: "OUR EXPERTS",
      ContactaText2: "And get personalized advice for your project.",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7 THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you",
      HablarCons: "Talk to one of our experts",
      Hero1: "MISSION-CRITICAL SYSTEMS SUPPORT",
      Hero2: "SPECIALISTS",
      Hero2sub:
        "In electrical installations, operation, monitoring, and technical service.",
      HeroText:
        "At PS Service, we are where and when our customers require us. With coverage throughout the Mexican Republic, with a 24/7 service, our engineers execute omnisolutions, that is, they design, develop, supply, install, operate, manage, and provide support and after-sales service for mission-critical systems and point data centers.",
      Soluciones1: "Preventive and Corrective Maintenance.",
      Soluciones1Points:
        "Mission-critical equipment in: • Data and IT centers • Electrical energy • Solar energy • Precision and comfort air conditioning • CCTV and access control • DCIM and Scada software",
      Soluciones2: "CONSULTANCY",
      Soluciones2Points:
        "Engineering with the best experts in each of our divisions and a proven track record of 25 years of efficiency and personalized attention.",
      Soluciones3: "MISSION-CRITICAL SYSTEMS MANAGEMENT",
      Soluciones3Points:
        "PS Service becomes the best option to centralize the operation of a critical system that has various technologies. A single manager to understand and serve multisystems.",
    },
    TecnologiaMedica: {
      Contacta: "CONTACT",
      ContactaText: "OUR EXPERTS",
      ContactaText2: "And get personalized advice for your project",
      Contacto: "Contact",
      ContactoBtnEmergencia: "24/7 EMERGENCY SERVICES",
      ContactoCatalogo: "DOWNLOAD CATALOG",
      ContactoOperamos: "WE WORK 24/7 THROUGHOUT THE MEXICAN REPUBLIC",
      ContactoText:
        "We are at your disposal; please send us your name and contact information and an expert will contact you",
      HablarCons: "Talk to one of our experts",
      Hero1: "MEDICAL TECHNOLOGY",
      Hero2: "ENGINEERING",
      Hero2sub: "AT THE SERVICE OF HEALTH",
      HeroText:
        "We offer innovation and protection of critical infrastructure in the medical sector with medical engineering solutions. We inherited the core business of the PS Service® group for the design, project, construction, supply, operation and maintenance of hospitals and clinics.",
      Soluciones1: "ACTIVE SANITIZATION",
      Soluciones1Points:
        "State-of-the-art with cold plasma for surgical rooms, waiting rooms, rooms, and critical areas in hospitals",
      Soluciones2: "ELECTRICAL QUALITY",
      Soluciones2Points:
        "Medical grade electrical protection for critical hospital and clinic equipment",
      Soluciones3: "MEDICAL INFORMATION TECHNOLOGIES",
      Soluciones3Points:
        "A system for  optimized control and management of medical records and intrahospital activities",
    },
  };
  const es = {
    Footer: {
      Aire: "Aires Acondicionados",
      Aliados: "Aliados",
      Aviso: "Aviso de Privacidad de Datos",
      Bolsa: "Bolsa de Trabajo",
      Certificaciones: "Certificaciones",
      Clientes: "Clientes",
      Contacto: "Contacto",
      Data: "Tecnología Médica",
      Energia: "Sistemas Eléctricos",
      Especialidades: "Especialidades",
      Fabricacion: "Fabricación de Equipo",
      Frase: "Queremos conocerte y darte una solución a la medida",
      Infraestructura: "Datacenter",
      Monitoreo: "Monitoreo y Seguridad",
      Recursos: "Recursos",
      RSE: "ESR",
      Servicios: "Soluciones",
      Sistemas: "Datacenter",
      Soporte: "Soporte e Instalación",
      Terminos: "Términos y Condiciones",
      NuestraMision: "Sistema de Gestión Integrado",
    },
    Aire: {
      Conocimiento: "SERVICIOS",
      ConocimientoText: "Nuestros sistemas de enfriamiento garantizan:",
      Contacta: "CONTACTA",
      ContactaText: "CON NUESTROS CONSULTORES",
      ContactaText2: "Y obtén la asesoría personalizada para tu proyecto.",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos:
        "OPERAMOS 24/7 CON COBERTURA EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo.",
      Experto: "Hablar con un experto",
      greenbox:
        "Siempre estamos buscando en nuestras soluciones reducir el impacto ambiental y la huella de carbono a la par de exceder las expectativas más exigentes de nuestros clientes.",
      HablarCons: "Hablar con un consultor",
      Hero1: "AIRES ACONDICIONADOS",
      Hero2: "Brindamos Eficiencia",
      Hero2sub: "Y estabilidad a los equipos",
      Hero3: "REFRIGERACIÓN DE PRECISIÓN",
      Hero4: "Clientes",
      Hero4Sub: "SATISFECHOS",
      Hero4Text:
        "Nadie mejor que nuestros clientes para hablar de nuestro trabajo, confían en nuestro compromiso con el excelente servicio.",
      HeroText:
        "Que requieren una temperatura constante  para asegurar la continuidad del negocio y la satisfacción del cliente. \n\nEs por ello que nos especializamos en ofrecer soluciones a la medida, capaces de optimizar el enfriamiento y humedad en los niveles ideales, protegiendo así la integridad y rendimiento de la infraestructura crítica.",
      MasCasos: "Más casos de éxito",
      S1: "Eficiencia Energética",
      S10: "Aires Acondicionados de Pared",
      S11: "Aires Acondicionados de Confort",
      S2: "Mantenimiento Proactivo",
      S3: "Sostenibilidad Ambiental\n",
      S4: "Soporte Técnico Especializado",
      S5: "Chillers (Distribución de agua helada)",
      S6: "Condensadores y Humidificadores",
      S7: "Aires Acondicionados Perimetrales ",
      S8: "Aires Acondicionados Inrow",
      S9: "Aires Acondicionados tipo Rack",
    },
    Bolsa: {
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos: "OPERAMOS 24/7 EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo",
      Hero1: "RECLUTAMIENTO",
      Hero2: "CONTAMOS",
      Hero2sub: "CON UNA CULTURA",
      HeroText:
        "Basada en la excelente atención a clientes y que impulsa a todos nuestros miembros a buscar alternativas innovadoras a los retos del día a día.",
      HeroText2:
        "Se parte del equipo PS Service® para complementar tu experiencia profesional, y llevar al máximo tus capacidades",
      Vacante1:
        "Nos mantenemos a la vanguardia con el mejor talento; aquí podrás encontrar las vacantes disponibles.",
      VacanteElige: "ELIGE LA VACANTE QUE QUIERES APLICAR",
    },
    Clientes: {
      Contacta: "CONTACTA",
      ContactaText: "CON NUESTROS CONSULTORES",
      ContactaText2: "Y obtén la asesoría personalizada para tu proyecto",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos:
        "OPERAMOS 24/7 CON COBERTURA EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo",
      HablarCons: "Hablar con un consultor",
      Hero1: "CLIENTES SATISFECHOS",
      Hero2: "EXCELENTE ATENCIÓN",
      Hero2sub: "Y AMPLIA EXPERIENCIA",
      HeroText:
        "Son los factores que nos han ayudado a distinguirnos como un proveedor estratégico para nuestros clientes, ya sea que centralicemos un proyecto desde su diseño o brindemos mantenimiento, la calidad y rapidez de nuestro servicio nos representa orgullosamente.",
      Soluciones1: "CENACE",
      Soluciones1Points:
        "Suministro, instalación, implementación, aprovisionamiento y mantenimiento de sistemas UPS mayores a 100 kVA, instalaciones eléctricas a nivel nacional.",
      Soluciones2: "SEDENA",
      Soluciones2Points:
        "Actualización, suministro, administración y operación de soluciones de alto blindaje en centros de datos, infraestructura de tecnología, plantas emergencia, UPS y enfriamiento de precisión",
      Soluciones3: "Walmart",
      Soluciones3Points:
        "Suministro, instalación, implementación, mantenimiento de sistemas UPS, instalaciones elétricas, sistemas de aire acondicionado, plantas de emergencia",
    },
    DataCenter: {
      Conocimiento: "Nuestras soluciones en datacenter",
      ConocimientoText:
        "Y dominio en cada fase del proceso de infraestructura en data centers, desde el diseño innovador hasta la instalación especializada y el mantenimiento integral, podemos brindar una gama completa de servicios. ",
      Contacta: "CONTACTA",
      ContactaText: "CON NUESTROS CONSULTORES",
      ContactaText2: "Y obtén la asesoría personalizada para tu proyecto.",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos:
        "OPERAMOS 24/7 CON COBERTURA EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo.",
      Descarga: "Descarga el catálogo",
      Experto: "Hablar con un experto",
      greenbox:
        "Siempre estamos buscando en nuestras soluciones reducir el impacto ambiental y la huella de carbono a la par de exceder las expectativas más exigentes de nuestros clientes.",
      HablarCons: "Hablar con un consultor",
      Hero1: "SOLUCIONES INNOVADORAS EN INFRAESTRUCTURA DE DATA CENTERS",
      Hero2: "SOMOS LA FIRMA",
      Hero2sub: "MÁS INNOVADORA EN SOLUCIONES",
      Hero3: "SERVICIOS EN DATA CENTER",
      Hero4: "CLIENTES",
      Hero4Sub: "SATISFECHOS",
      Hero4Text:
        "Nadie mejor que nuestros clientes para hablar de nuestro trabajo, confían en nuestro compromiso con el excelente servicio.",
      HeroText:
        "Nuestra amplia experiencia en soluciones integrales nos proporciona una perspectiva única y conocimientos especializados para asistirle en el dimensionamiento predictivo, preventivo y correctivo en la implementación de su data center. Nos enfocamos en atender tanto las necesidades actuales como futuras, asegurando la máxima eficiencia en infraestructura y costos.",
      MasCasos: "Más casos de éxito",
      S1: "Microcentros de Datos",
      S10: "Virtualización",
      S2: "Almacenamiento",
      S3: "Desempeño y Rendimiento en Datacenters",
      S4: "Procesamiento",
      S5: "Redes",
      S6: "Migración de Datos",
      S7: "Switches y Routers",
      S8: "Hiperconvergencia",
      S9: "Gabinetes",
      Servicios: "SOLUCIONES",
    },
    Energia: {
      Conocimiento: "Nula Interrupción",
      ConocimientoText:
        "Nuestra maestría radica en la implementación fluida de nuestras soluciones, garantizando que sus operaciones sigan su curso sin interrupciones.",
      Contacta: "CONTACTA",
      ContactaText: "CON NUESTROS CONSULTORES",
      ContactaText2: "Y obtén la asesoría personalizada para tu proyecto",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos:
        "OPERAMOS 24/7 CON COBERTURA EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo.",
      Experto: "Hablar con un experto",
      greenbox:
        "Siempre estamos buscando en nuestras soluciones reducir el impacto ambiental y la huella de carbono a la par de exceder las expectativas más exigentes de nuestros clientes.",
      HablarCons: "Hablar con un consultor",
      Hero1: "DOMINIO EN IMPLEMENTACIÓN DE SISTEMAS ELÉCTRICOS",
      Hero2: "SOMOS 25 AÑOS  ",
      Hero2sub: "DE FORTALEZA RESOLUTIVA",
      Hero3: "Máxima Continuidad ",
      Hero4: "CLIENTES",
      Hero4Sub: "SATISFECHOS",
      Hero4Text:
        "Nadie mejor que nuestros clientes para hablar de nuestro trabajo, confían en nuestro compromiso con el excelente servicio.",
      HeroText:
        "Nuestro enfoque integral se demuestra en el compromiso de brindar un servicio que abarca desde el diseño, suministro e implementación, hasta la instalación, operación, administración y soporte postventa para sistemas de protección eléctrica, servicio de almacenamiento de energía e instalaciones eléctricas y solares.\n\nCon más de 25 años en el sector, nuestra ingeniería es líder en tecnologías avanzadas para sistemas de energía ininterrumpida. Somos especialistas en transformadores, reguladores y soluciones de blindaje contra los disturbios eléctricos más críticos en cualquier red o marca.",
      MasCasos: "Más casos de éxito",
      S1: "Subestaciones Eléctricas",
      S10: "Sistemas de Almacenamiento de Energía",
      S11: "Instalaciones Eléctricas",
      S12: "Levantamientos Eléctricos",
      S13: "Proyectos de Iluminación",
      S14: "Proyectos de Fuerza",
      S15: "Estudios eléctricos y de calidad de energía (código red 2.0)",
      S2: "Plantas de Emergencia",
      S3: "Static Switch Transfer (Switch Estático de Transferencia)",
      S4: "Filtros Armónicos",
      S5: "Bancos Capacitores",
      S6: "TVSS (Supresores de pico de voltaje)",
      S7: "Reguladores de Voltaje",
      S8: "Sistemas de Energía Ininterrumpible (UPS)",
      S9: "Unidades de distribución de energía eléctrica (PDU)",
      Servicios: "SERVICIOS",
    },
    Fabricacion: {
      Contacta: "CONTACTA",
      ContactaText: "CON NUESTROS CONSULTORES",
      ContactaText2: "Y obtén la asesoría personalizada para tu proyecto.",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos: "OPERAMOS 24/7 EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo.",
      HablarCons: "Hablar con un consultor",
      Hero1: "FABRICACIÓN \nDE COMPONENTES\nY GABINETES",
      Hero2: "INGENIERÍA",
      Hero2sub: "A LA MEDIDA",
      HeroText:
        "Somos fabricantes de soluciones para centros de datos prefabricados, energía y enfriamiento, gabinetes industriales y blindaje de energía eléctrica.",
      Soluciones1: "SOLUCIONES DE DATA CENTER",
      Soluciones1Points:
        "• Centros de datos prefabricados\n• Micro Centros de datos\n• Gabinetes T.I.",
      Soluciones2: "GABINETES INDUSTRIALES",
      Soluciones2Points:
        "• Unidad de distribución de energía (PDU)\n• Switches de transferencia automáticos (ATS)\n• Bypass mecánicos\n• Gabinetes de batería (VRLA-NiCad-Litio)",
      Soluciones3: "ENFRIAMENTO PARA INDUSTRIA",
      Soluciones3Points:
        "• Enfriamiento de precisión perimetral, hilera, en pared, rack",
    },
    Landing: {
      CertIso: "Certificaciones ISO",
      CertIso2: "Certificaciones",
      CertIsoText: "Avalando nuestros procesos de servicio",
      CertIsoText2: "En la implementación de tecnología",
      CertNom: "Certificaciones NOM",
      CertNomText: "Por cada uno de nuestros ingenieros",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos:
        "OPERAMOS 24/7 CON COBERTURA EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo.",
      Esp_aire: "AIRES ACONDICIONADOS",
      Esp_aire_text:
        "Soluciones de aires acondicionados de precisión y confort para optimizar el enfriamiento y humedad, desde el diseño e implementación hasta el mantenimiento preventivo y correctivo.",
      Esp_datacenter: "DATA CENTER",
      Esp_datacenter_txt:
        "Soluciones integrales para centros de datos, desde el dimensionamiento y diseño, hasta la implementación, operación, administración y mantenimiento preventivo y correctivo.",
      Esp_monitoreo: "MONITOREO",
      Esp_monitoreo_text:
        "Administración, operación y control absoluto y optimizado de sistemas eléctricos, electrónicos y electromecánicos.",
      Esp_sistemas: "SISTEMAS ELÉCTRICOS",
      Esp_sistemas_text:
        "Diseño, suministro, implementación, instalación, administración y mantenimiento preventivo y correctivo en sistemas de energía eléctrica y solar.",
      Experto: "Hablar con un experto",
      Hero1:
        "La firma omnisolución en SISTEMAS DE MISIÓN CRÍTICA y Datacenters ",
      Hero2: "SOMOS INGENIERÍA",
      Hero2sub: "DE ALTO NIVEL",
      Hero3: "ESPECIALIZACIÓN",
      Hero3Sub: "En sistemas de misión crítica",
      Hero3Text:
        "Experiencia, conocimiento e infraestructura aplicados a la continuidad de  sistemas de misión crítica. ",
      Hero4: "SOLUCIONES",
      Hero4Sub: "PARA INDUSTRIA",
      Hero5: "CLIENTES",
      Hero5Sub: "SATISFECHOS",
      Hero5Text:
        "Nadie mejor que nuestros clientes para hablar de nuestro trabajo.",
      Hero6: "CERTIFICACIONES",
      Hero6Text:
        "Todos nuestros ingenieros están certificados bajo las Normas oficiales de seguridad, salud y organizacional.",
      Hero7: "ALIADOS",
      Hero7Sub: "DE NEGOCIO",
      Hero7Text:
        "Somos el canal de empresas reconocidas a nivel nacional e internacional, para brindar asesoría, ventas y servicio, sobre nuestras soluciones integrales que incluyen toda la experiencia y la ingeniería del corporativo.",
      Hero8: "ÚNETE A",
      Hero8Sub: "NUESTROS CONSULTORES",
      Hero8Text:
        "En PS Service reconocemos el talento, llena nuestro formulario y únete a nuestro equipo",
      Hero9: "EMPRESA",
      Hero9Sub: "SOCIALMENTE RESPONSABLE",
      Hero9Text:
        "Somos una empresa comprometida con el entorno organizacional favorable, y que promueve las mejores prácticas y procedimientos para buscar la permanencia a través de la sostenibilidad económica, legal, ética, social y ambiental. \n\nRespetamos y promovemos los derechos humanos, laborales, la equidad de genero, el combate a la violencia contra grupos vulnerables, el combate a la discriminación, para procurar un ambiente de trabajo digno, y demostrar una responsabilidad social ciudadana.",
      HeroText:
        "Contamos con 25 años de experiencia en el desarrollo de soluciones punto a punto para sistemas de misión crítica, datacenter y aire acondicionado.",
      ISOTxt:
        "✔  9001:2015 Sistema de Calidad de Procesos\n✔  14001:2015 Sustentabilidad y Medio Ambiente\n✔  27001:2022 Certificación de Protección de Datos\n✔  45001:2018 Salud y Seguridad en el Ambiente de Trabajo",
      Leer: "Leer más",
      MasCasos: "Más casos de éxito",
      QuieroSer: "Quiero ser consultor",
      Sol1Text:
        "Soluciones eléctricas que balancean desde la subestación hasta aplicativos",
      Sol1Title: "Energía",
      Sol2Text:
        "Ofrecemos mantenimiento y asesoría de proyectos de misión crítica, predictivo, preventivo y correctivo",
      Sol2Title: "Soporte",
      Sol3Text:
        "Nuestra propia línea de producción personalizada para las necesidades de nuestros clientes",
      Sol3Title: "Fabricación \nde Equipo",
      Sol4Text:
        "Diseño, implementación y mantenimiento de la infraestructura de centros de datos",
      Sol4Title: "Datacenter",
      Sol5Text:
        "Gestión absoluta de sistemas eléctricos, electrónicos y electromecánicos",
      Sol5Title: "Monitoreo \ny Seguridad",
      Sol6Text:
        "Soluciones de  precisión y confort para optimizar el enfriamiento y humedad\n",
      Sol6Title: "Aires Acondicionados",
      Sol7Text:
        "Innovación y protección de la infraestructura crítica en el sector médico con soluciones de ingeniería médica",
      Sol7Title: "Tecnología Médica",
    },
    Monitoreo: {
      Conocimiento: "SEGURIDAD MULTINIVEL",
      ConocimientoText:
        "Nuestra maestría radica en la implementación fluida de nuestras soluciones, garantizando que sus operaciones sigan su curso sin interrupciones.",
      Contacta: "CONTACTA",
      ContactaText: "CON NUESTROS CONSULTORES",
      ContactaText2: "Y obtén la asesoría personalizada para tu proyecto.",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos:
        "OPERAMOS 24/7 CON COBERTURA EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo.",
      Experto: "Hablar con un experto",
      HablarCons: "Hablar con un consultor",
      Hero1: "MONITOREO Y SEGURIDAD PARA SISTEMAS DE MISIÓN CRÍTICA",
      Hero2: "SISTEMAS SOFISTICADOS",
      Hero2sub: "PARA TODO TIPO DE INDUSTRIAS",
      Hero3: "VISIBILIDAD Y CONTROL",
      Hero4: "CLIENTES",
      Hero4Sub: "SATISFECHOS",
      Hero4Text:
        "Nadie mejor que nuestros clientes para hablar de nuestro trabajo, confían en nuestro compromiso con el excelente servicio.",
      HeroText:
        "Nuestra experiencia y conocimientos especializados nos posicionan \ncomo el aliado estratégico que su organización necesita para monitorear, proteger, administrar, controlar y salvaguardar los recursos en sus instalaciones.\n\nEn PS Service tenemos la capacidad de administrar, controlar y operar sistemas eléctricos, electrónicos y electromecánicos en un mismo punto o puntos alternos, mediante un solo sistema que permite el control absoluto de la operación así converjan diversas tecnologías de distintas marcas.",
      MasCasos: "Más casos de éxito",
      S1: "Data Center Infraestructure Management (DCIM)",
      S2: "Supervisory Control and Data Acquisition (sistema SCADA)",
      S3: "Center for Internet Security (CIS)",
      S4: "Centro de CCTV de última generación (sistema de vigilancia)",
      S5: "Control inteligente",
      Servicios: "SERVICIOS",
    },
    RSE: {
      Apoyo: "APOYO A INFANCIAS VULNERABLES",
      ApoyoText:
        "Participación como organización socialmente responsable con Fundación Teletón, que ayuda a niñas y niños con discapacidad, cáncer o autismo. ",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo.",
      DeCons: "DE CONSULTA",
      Documentos: "DOCUMENTOS",
      Hero1: "COMPROMISO CON NUESTRA COMUNIDAD Y EL FUTURO",
      Hero2: "EMPRESA",
      Hero2sub: "SOCIALMENTE RESPONSABLE",
      Hero3: "ACCIONES SUSTENTABLES",
      HeroText:
        "Somos una empresa comprometida con el entorno organizacional favorable, y que promueve las mejores prácticas y procedimientos para buscar la permanencia a través de la sostenibilidad económica, legal, ética, social y ambiental. \n\nRespetamos y promovemos los derechos humanos, laborales, la equidad de genero, el combate a la violencia contra grupos vulnerables, el combate a la discriminación, para procurar un ambiente de trabajo digno, y demostrar una responsabilidad social ciudadana.",
      Manejo: "MANEJO DE RESIDUOS",
      ManejoText:
        "Apego estricto al manejo eficaz de residuos, baterías, refrigerantes y gases conforme a normas internacionales.",
      ProtCivil: "PROTECCIÓN CIVIL",
      ProtCivilText:
        "Coordinación y participación con el programa municipal, para atención de riesgos y prevención de desastres dentro y fuera de la organización.",
      Respetamos:
        "Respetamos y promovemos los derechos humanos, laborales, la equidad de genero, el combate a la violencia contra grupos vulnerables, el combate a la discriminación, para procurar un ambiente de trabajo digno, y demostrar una responsabilidad social ciudadana.",
    },
    Soporte: {
      Contacta: "CONTACTA",
      ContactaText: "CON NUESTROS CONSULTORES",
      ContactaText2: "Y obtén la asesoría personalizada para tu proyecto.",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos: "OPERAMOS 24/7 EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo.",
      HablarCons: "Hablar con un consultor",
      Hero1: "SOPORTE DE SISTEMAS DE MISIÓN CRÍTICA",
      Hero2: "ESPECIALISTAS",
      Hero2sub:
        "En instalaciones eléctricas, operación, monitoreo y servicio técnico.",
      HeroText:
        "En PS Service estamos donde y cuando  los clientes nos requieren. Con cobertura en toda la República Mexicana, con servicio 24/7, nuestros ingenieros ejecutan omnisoluciones, es decir  diseñan, desarrollan,  suministran,  instalan, operan, administran, y brindan soporte y servicio post venta para sistemas de misión crítica y data centers de punto a punto.",
      Soluciones1: "Mantenimientos Preventivos y Correctivos.",
      Soluciones1Points:
        "En equipos de misión crítica en:\n\n• Centros de datos y TI\n• Energía eléctrica\n• Energía Solar\n• Aires Acondicionados de precisión y confort\n• CCTV y acceso control\n• DCIM y software Scada",
      Soluciones2: "CONSULTORÍA",
      Soluciones2Points:
        "De ingeniería con los mejores expertos en cada una de nuestras divisiones y comprobada trayectoria de 25 años de eficiencia y atención personalizada.",
      Soluciones3: "GESTIÓN DE SISTEMAS DE MISIÓN CRÍTICA",
      Soluciones3Points:
        "PS Service se convierte en la mejor opción para centralizar la operación de un sistema crítico que cuenta con diversas tecnologías. Un solo gestor para entender y atender multisistemas.\n",
    },
    TecnologiaMedica: {
      Contacta: "CONTACTA",
      ContactaText: "CON NUESTROS CONSULTORES",
      ContactaText2: "Y obtén la asesoría personalizada para tu proyecto",
      Contacto: "Contacto",
      ContactoBtnEmergencia: "SERVICIO DE EMERGENCIA 24/7",
      ContactoCatalogo: "DESCARGAR CATÁLOGO",
      ContactoOperamos: "OPERAMOS 24/7 EN TODA LA REPÚBLICA MEXICANA",
      ContactoText:
        "Estamos a tu órdenes, déjanos tu nombre y medio de contacto y un asesor se comunicará contigo",
      HablarCons: "Hablar con un consultor",
      Hero1: "TECNOLOGÍA MÉDICA",
      Hero2: "INGENIERÍA",
      Hero2sub: "AL SERVICIO DE LA SALUD",
      HeroText:
        "Ofrecemos la innovación y protección de la infraestructura crítica en el sector médico con soluciones de ingeniería médica.\n\nHeredamos el core business del grupo PS Service® para el diseño, proyecto, construcción, suministro, operación y mantenimiento de hospitales y clínicas.",
      Soluciones1: "SANITIZACIÓN ACTIVA",
      Soluciones1Points:
        "De última generación con plasma frío para salas quirúrgicas, salas de espera, cuartos, y zonas críticas en hospitales",
      Soluciones2: "CALIDAD ELÉCTRICA",
      Soluciones2Points:
        "Protección eléctrica de grado médico para equipos críticos de hospitales y clínicas",
      Soluciones3: "TECNOLOGÍAS DE INFORMACIÓN MÉDICA",
      Soluciones3Points:
        "Sistema para control y manejo optimizado de expedientes médicos y actividades intrahospitalarias",
    },
  };
  return lng === "en" ? { data: en[ns] } : { data: es[ns] };
}
