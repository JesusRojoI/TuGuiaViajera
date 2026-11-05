import {
  bullets,
  paragraph,
  section,
  type LegalDocument,
} from './shared';

export const termsDocument: LegalDocument = {
  title: {
    es: 'Términos y condiciones',
    en: 'Terms and Conditions',
  },
  updated: {
    es: 'Noviembre de 2026',
    en: 'November 2026',
  },
  intro: [
    {
      es: 'Bienvenido a Tu Guía Viajera. Al acceder, navegar o utilizar nuestro sitio web tuguiaviajera.com, así como al solicitar, reservar o contratar cualquiera de nuestros servicios turísticos y de entretenimiento, aceptas los presentes Términos y Condiciones.',
      en: 'Welcome to Tu Guía Viajera. By accessing, browsing or using our website tuguiaviajera.com, as well as by requesting, booking or contracting any of our tourism and entertainment services, you accept these Terms and Conditions.',
    },
    {
      es: 'Te recomendamos leerlos detenidamente antes de realizar cualquier solicitud, reservación o contratación.',
      en: 'We recommend that you read them carefully before making any request, reservation or contracting any service.',
    },
  ],
  sections: [
    section(
      '1. Información general',
      '1. General information',
      paragraph(
        'Tu Guía Viajera ofrece servicios relacionados con la planeación, diseño, coordinación y comercialización de experiencias, viajes y actividades turísticas o de entretenimiento.',
        'Tu Guía Viajera offers services related to the planning, design, coordination and marketing of experiences, trips and tourism or entertainment activities.'
      ),
      paragraph(
        'Entre los servicios que podemos ofrecer se encuentran:',
        'The services we may offer include:'
      ),
      bullets(
        [
          'Diseño de itinerarios personalizados.',
          'Experiencias culturales, temáticas y turísticas.',
          'Visitas a sitios históricos y arqueológicos.',
          'Actividades de ecoturismo y aventura.',
          'Experiencias de playa y actividades acuáticas.',
          'Experiencias gastronómicas.',
          'Rutas de vino y catas.',
          'Experiencias artísticas y eventos culturales.',
          'Actividades urbanas y de entretenimiento.',
          'Coordinación logística de servicios turísticos y experiencias personalizadas.',
        ],
        [
          'Design of personalized itineraries.',
          'Cultural, thematic and tourism experiences.',
          'Visits to historical and archaeological sites.',
          'Ecotourism and adventure activities.',
          'Beach experiences and water activities.',
          'Culinary experiences.',
          'Wine routes and tastings.',
          'Artistic experiences and cultural events.',
          'Urban and entertainment activities.',
          'Logistical coordination of tourism services and personalized experiences.',
        ]
      ),
      paragraph(
        'La disponibilidad y características de cada servicio dependerán de la experiencia, destino, fecha, proveedores participantes y condiciones específicas de la contratación.',
        'The availability and characteristics of each service will depend on the experience, destination, date, participating suppliers and the specific conditions of the contracting.'
      )
    ),
    section(
      '2. Aceptación de los Términos y Condiciones',
      '2. Acceptance of the Terms and Conditions',
      paragraph(
        'Al utilizar este sitio web o contratar cualquiera de nuestros servicios, declaras que:',
        'By using this website or contracting any of our services, you declare that:'
      ),
      bullets(
        [
          'Has leído y comprendido estos Términos y Condiciones.',
          'Aceptas quedar sujeto a ellos en su totalidad.',
          'Proporcionas información verdadera, exacta y actualizada.',
          'Tienes plena capacidad legal para contratar los servicios solicitados.',
          'En caso de realizar una contratación en nombre de terceros o de un grupo de viajeros/participantes, cuentas con la autorización legal previa correspondiente.',
        ],
        [
          'You have read and understood these Terms and Conditions.',
          'You agree to be bound by them in their entirety.',
          'You provide truthful, accurate and up-to-date information.',
          'You have full legal capacity to contract the requested services.',
          'If you contract on behalf of third parties or a group of travelers/participants, you have the corresponding prior legal authorization.',
        ]
      ),
      paragraph(
        'Si no estás de acuerdo con alguno de estos términos, deberás abstenerte de utilizar el sitio o contratar nuestros servicios.',
        'If you do not agree with any of these terms, you must refrain from using the site or contracting our services.'
      )
    ),
    section(
      '3. Información del sitio web',
      '3. Website information',
      paragraph(
        'Procuramos que la información publicada en nuestro sitio web tuguiaviajera.com sea clara, actualizada y precisa.',
        'We endeavor to ensure that the information published on our website tuguiaviajera.com is clear, up to date and accurate.'
      ),
      paragraph(
        'Sin embargo, las fotografías, descripciones, horarios, precios, disponibilidad y características de determinadas experiencias pueden estar sujetas a cambios debido a condiciones operativas, climáticas, de temporada, disponibilidad de proveedores u otras circunstancias ajenas a nuestro control.',
        'However, photographs, descriptions, schedules, prices, availability and characteristics of certain experiences may be subject to changes due to operational, weather or seasonal conditions, supplier availability or other circumstances beyond our control.'
      ),
      paragraph(
        'La información mostrada en el sitio web tiene carácter orientativo e informativo y no constituye necesariamente una confirmación definitiva de reserva. La contratación se considerará confirmada únicamente cuando Tu Guía Viajera emita y comunique expresamente la confirmación correspondiente.',
        'The information shown on the website is for guidance and information purposes and does not necessarily constitute a definitive reservation confirmation. The contracting will be considered confirmed only when Tu Guía Viajera issues and expressly communicates the corresponding confirmation.'
      )
    ),
    section(
      '4. Cotizaciones',
      '4. Quotes',
      paragraph(
        'Las solicitudes realizadas a través del sitio web, correo electrónico, teléfono u otros medios de contacto podrán generar una cotización personalizada.',
        'Requests made through the website, email, telephone or other means of contact may generate a personalized quote.'
      ),
      paragraph(
        'Las cotizaciones dependerán de factores como:',
        'Quotes will depend on factors such as:'
      ),
      bullets(
        [
          'Número de participantes o viajeros.',
          'Fechas programadas para la experiencia o viaje.',
          'Destino o sede.',
          'Tipo de experiencia o paquete seleccionado.',
          'Disponibilidad.',
          'Servicios incluidos y adicionales solicitados.',
          'Proveedores participantes.',
          'Temporada alta/baja.',
          'Condiciones de transporte, hospedaje, accesos u otros servicios.',
        ],
        [
          'Number of participants or travelers.',
          'Scheduled dates for the experience or trip.',
          'Destination or venue.',
          'Type of experience or package selected.',
          'Availability.',
          'Included services and additional services requested.',
          'Participating suppliers.',
          'High/low season.',
          'Transport, lodging, access or other service conditions.',
        ]
      ),
      paragraph(
        'Una cotización no constituye por sí misma una reservación confirmada. Los precios y condiciones indicados en una cotización tendrán la vigencia señalada en la misma. Si no se indica una vigencia específica, estarán sujetos a disponibilidad y podrán modificarse antes de la confirmación formal de la reserva.',
        'A quote does not by itself constitute a confirmed reservation. The prices and conditions indicated in a quote will be valid for the period stated therein. If no specific validity period is indicated, they will be subject to availability and may be modified before the formal confirmation of the reservation.'
      )
    ),
    section(
      '5. Reservaciones',
      '5. Reservations',
      paragraph(
        'Una reservación se considerará confirmada una vez que el cliente haya cumplido expresamente con las condiciones indicadas en la cotización o comprobante de confirmación.',
        'A reservation will be considered confirmed once the client has expressly complied with the conditions indicated in the quote or confirmation receipt.'
      ),
      paragraph(
        'Dependiendo del servicio, se podrá requerir:',
        'Depending on the service, the following may be required:'
      ),
      bullets(
        [
          'El pago total del servicio.',
          'El pago de un anticipo o depósito de garantía.',
          'La confirmación de datos de identificación de los participantes.',
          'La aceptación expresa de las condiciones particulares de la experiencia.',
          'El cumplimiento de requisitos específicos establecidos por proveedores finales.',
        ],
        [
          'Full payment for the service.',
          'Payment of a deposit or security deposit.',
          'Confirmation of the participants’ identification details.',
          'Express acceptance of the particular conditions of the experience.',
          'Compliance with specific requirements established by end suppliers.',
        ]
      ),
      paragraph(
        'El envío de una solicitud mediante formularios o correo electrónico no garantiza la reserva del cupo o fecha hasta su oportuna confirmación e ingreso de pago.',
        'Sending a request through forms or email does not guarantee the reservation of the place or date until its timely confirmation and payment receipt.'
      )
    ),
    section(
      '6. Precios y pagos',
      '6. Prices and payments',
      paragraph(
        'Los precios de nuestros servicios se indicarán en la cotización, página del servicio o medio de contratación correspondiente.',
        'The prices of our services will be indicated in the quote, service page or corresponding contracting channel.'
      ),
      paragraph(
        'Los precios pueden variar dependiendo de la fecha, disponibilidad, número de participantes, temporada y condiciones de los proveedores involucrados.',
        'Prices may vary depending on the date, availability, number of participants, season and conditions of the suppliers involved.'
      ),
      paragraph(
        'Cuando una experiencia requiera pago anticipado, la validez de la reservación quedará sujeta a la recepción y validación del pago correspondiente por parte del departamento financiero de Tu Guía Viajera.',
        'When an experience requires advance payment, the validity of the reservation will be subject to receipt and validation of the corresponding payment by the finance department of Tu Guía Viajera.'
      ),
      paragraph(
        'El cliente es responsable de proporcionar información correcta para procesar el pago y de conservar sus comprobantes. Cuando el pago sea procesado mediante pasarelas externas, se aplicarán también los términos y condiciones de dicha plataforma de pago.',
        'The client is responsible for providing correct information to process the payment and for keeping their receipts. When the payment is processed through external gateways, the terms and conditions of that payment platform will also apply.'
      )
    ),
    section(
      '7. Servicios incluidos y no incluidos',
      '7. Included and non-included services',
      paragraph(
        'Cada experiencia o itinerario contará con especificaciones particulares respecto de los servicios incluidos. El cliente debe revisar detalladamente la propuesta o cotización antes de confirmar la contratación.',
        'Each experience or itinerary will have particular specifications regarding the included services. The client must carefully review the proposal or quote before confirming the contracting.'
      ),
      paragraph(
        'Salvo que se indique de manera explícita en la confirmación por escrito, se entienden como gastos NO incluidos:',
        'Unless explicitly stated in the written confirmation, the following are understood as NOT included expenses:'
      ),
      bullets(
        [
          'Gastos personales de cualquier índole.',
          'Propinas para guías, chóferes o personal de servicio.',
          'Alimentos y bebidas no especificados explícitamente en el programa.',
          'Entradas a atracciones, recintos o actividades adicionales no listadas.',
          'Servicios adicionales solicitados con posterioridad a la contratación.',
          'Gastos derivados de modificaciones al itinerario solicitadas por el cliente.',
          'Costos adicionales ocasionados por retrasos, cancelaciones o faltas atribuibles al cliente.',
        ],
        [
          'Personal expenses of any kind.',
          'Tips for guides, drivers or service staff.',
          'Food and beverages not explicitly specified in the program.',
          'Admission to attractions, venues or additional activities not listed.',
          'Additional services requested after contracting.',
          'Expenses arising from itinerary changes requested by the client.',
          'Additional costs caused by delays, cancellations or absences attributable to the client.',
        ]
      )
    ),
    section(
      '8. Cambios solicitados por el cliente',
      '8. Changes requested by the client',
      paragraph(
        'El cliente podrá solicitar modificaciones o cambios en su reservación o itinerario programado.',
        'The client may request modifications or changes to their reservation or scheduled itinerary.'
      ),
      paragraph(
        'La factibilidad de aplicar dichos cambios estará sujeta a la disponibilidad técnica, operativa y a las políticas de los proveedores involucrados. Cualquier cambio puede generar costos adicionales, penalizaciones o diferencias de tarifa que deberán ser cubiertos en su totalidad por el cliente antes de la prestación del servicio.',
        'The feasibility of applying such changes will be subject to technical and operational availability and to the policies of the suppliers involved. Any change may generate additional costs, penalties or rate differences that must be fully covered by the client before the provision of the service.'
      )
    ),
    section(
      '9. Cancelaciones por parte del cliente',
      '9. Cancellations by the client',
      paragraph(
        'Las condiciones y cargos aplicables por cancelación dependerán del tipo de servicio contratado y de los términos de los proveedores involucrados.',
        'The conditions and charges applicable for cancellation will depend on the type of service contracted and the terms of the suppliers involved.'
      ),
      paragraph(
        'Al momento de confirmar la reserva, se informarán las condiciones específicas de cancelación, reembolso o reprogramación. Si la cancelación genera penalizaciones o gastos no reembolsables por parte de terceros (hoteles, transportistas, parques, etc.), dichos montos se descontarán del importe que pudiera corresponder a devolución.',
        'At the time of confirming the reservation, the specific cancellation, refund or rescheduling conditions will be informed. If the cancellation generates penalties or non-refundable expenses on the part of third parties (hotels, transport companies, parks, etc.), those amounts will be deducted from any amount that could correspond to a refund.'
      ),
      paragraph(
        'Toda solicitud de cancelación deberá enviarse por escrito al correo electrónico: atencion@tuguiaviajera.com',
        'Any cancellation request must be sent in writing to the email address: atencion@tuguiaviajera.com'
      )
    ),
    section(
      '10. Reembolsos',
      '10. Refunds',
      paragraph(
        'Cuando resulte procedente un reembolso, este se tramitará conforme a las condiciones de la reservación y a las políticas de los proveedores externos que intervengan.',
        'When a refund is applicable, it will be processed in accordance with the conditions of the reservation and the policies of the external suppliers involved.'
      ),
      paragraph(
        'No todos los servicios turísticos o de entretenimiento son reembolsables. Los tiempos de procesamiento del reembolso dependerán del medio de pago utilizado, pasarelas y tiempos operativos de las instituciones financieras. Las comisiones bancarias o transaccionales generadas por el pago o devolución no serán reembolsables salvo disposición legal en contrario.',
        'Not all tourism or entertainment services are refundable. Refund processing times will depend on the payment method used, gateways and the operational times of financial institutions. Bank or transaction fees generated by the payment or refund will not be refundable unless otherwise provided by law.'
      )
    ),
    section(
      '11. Cancelaciones o cambios por parte de Tu Guía Viajera',
      '11. Cancellations or changes by Tu Guía Viajera',
      paragraph(
        'En circunstancias extraordinarias o de fuerza mayor, Tu Guía Viajera o los proveedores operativos podrán modificar, reprogramar o cancelar una experiencia.',
        'In extraordinary circumstances or force majeure, Tu Guía Viajera or the operational suppliers may modify, reschedule or cancel an experience.'
      ),
      paragraph(
        'Esto puede ocurrir debido a:',
        'This may occur due to:'
      ),
      bullets(
        [
          'Condiciones climáticas adversas o riesgos meteorológicos.',
          'Fenómenos naturales o contingencias ambientales.',
          'Situaciones de seguridad local o nacional.',
          'Cierres imprevistos de sitios turísticos, recintos o carreteras.',
          'Fallas técnicas u operativas no previsibles.',
          'Circunstancias de fuerza mayor o caso fortuito.',
        ],
        [
          'Adverse weather conditions or meteorological risks.',
          'Natural phenomena or environmental contingencies.',
          'Local or national security situations.',
          'Unforeseen closures of tourist sites, venues or roads.',
          'Unforeseeable technical or operational failures.',
          'Force majeure or fortuitous events.',
        ]
      ),
      paragraph(
        'En estos casos, se informará oportunamente al cliente y se priorizará la reprogramación del servicio o la sustitución por una alternativa de valor similar. En caso de cancelación definitiva sin alternativa viable, se aplicarán los criterios de reembolso correspondientes conforme a las condiciones del servicio.',
        'In these cases, the client will be informed in a timely manner and priority will be given to rescheduling the service or replacing it with an alternative of similar value. In the event of definitive cancellation without a viable alternative, the corresponding refund criteria will apply in accordance with the conditions of the service.'
      )
    ),
    section(
      '12. Proveedores externos',
      '12. External suppliers',
      paragraph(
        'Para la prestación integral de ciertas experiencias, Tu Guía Viajera actúa como intermediario o coordinador frente a proveedores externos especializados (como hoteles, restaurantes, transportistas, guías locales, parques temáticos y operadores de aventura).',
        'For the comprehensive provision of certain experiences, Tu Guía Viajera acts as an intermediary or coordinator with specialized external suppliers (such as hotels, restaurants, transport companies, local guides, theme parks and adventure operators).'
      ),
      paragraph(
        'Dichos terceros cuentan con sus propios términos de servicio, reglamentos internos y medidas de seguridad, los cuales deben ser acatados por los participantes durante el desarrollo de la experiencia.',
        'Such third parties have their own terms of service, internal regulations and safety measures, which must be complied with by the participants during the development of the experience.'
      )
    ),
    section(
      '13. Responsabilidad del viajero o usuario',
      '13. Responsibility of the traveler or user',
      paragraph(
        'El usuario o cliente se compromete a:',
        'The user or client agrees to:'
      ),
      bullets(
        [
          'Proporcionar información verídica, exacta y completa para la gestión de su reserva.',
          'Presentarse con puntualidad en los puntos de encuentro y horarios establecidos.',
          'Portar la documentación oficial requerida durante todo el trayecto o experiencia.',
          'Seguir en todo momento las recomendaciones e instrucciones del personal a cargo, guías e instructores.',
          'Respetar las normas de conducta, instalaciones y patrimonio de las zonas o sitios visitados.',
          'Notificar con oportunidad cualquier condición médica o requerimiento especial.',
        ],
        [
          'Provide truthful, accurate and complete information for managing their reservation.',
          'Arrive punctually at the established meeting points and times.',
          'Carry the required official documentation throughout the journey or experience.',
          'Follow at all times the recommendations and instructions of the staff in charge, guides and instructors.',
          'Respect the rules of conduct, facilities and heritage of the areas or sites visited.',
          'Notify in a timely manner of any medical condition or special requirement.',
        ]
      ),
      paragraph(
        'La falta de puntualidad, la ausencia de documentación requerida o la inobservancia de las normas de seguridad pueden resultar en la pérdida de la actividad sin derecho a compensación o reembolso.',
        'Lack of punctuality, absence of required documentation or failure to observe safety rules may result in loss of the activity without any right to compensation or refund.'
      )
    ),
    section(
      '14. Documentación y requisitos de viaje',
      '14. Documentation and travel requirements',
      paragraph(
        'Es responsabilidad exclusiva del participante contar con la documentación oficial vigente (identificación oficial, pasaportes, visas, permisos o certificados sanitarios) que sea exigida por las autoridades para la realización de la experiencia o traslado.',
        'It is the sole responsibility of the participant to have valid official documentation (official identification, passports, visas, permits or health certificates) required by the authorities for carrying out the experience or transfer.'
      ),
      paragraph(
        'Tu Guía Viajera podrá brindar orientación general sobre los requisitos, pero no asumirá responsabilidad por la denegación de accesos o abordajes derivados del incumplimiento de requisitos por parte del cliente.',
        'Tu Guía Viajera may provide general guidance on the requirements, but will not assume responsibility for denial of access or boarding resulting from the client’s failure to comply with requirements.'
      )
    ),
    section(
      '15. Actividades de aventura y actividades físicas',
      '15. Adventure and physical activities',
      paragraph(
        'Ciertas experiencias pueden involucrar la práctica de deportes, caminatas, actividades acuáticas o de aventura que conllevan un riesgo inherente.',
        'Certain experiences may involve sports, hiking, water or adventure activities that carry inherent risk.'
      ),
      paragraph(
        'Al participar en estas actividades, el cliente declara encontrarse en condiciones físicas y de salud adecuadas para su desarrollo y se compromete a cumplir rigurosamente con el uso del equipo de protección y con los protocolos de seguridad. Tu Guía Viajera o el operador a cargo podrán restringir la participación de un usuario si se determina que su condición compromete su seguridad o la del grupo.',
        'By participating in these activities, the client declares that they are in adequate physical and health conditions for their development and agrees to strictly comply with the use of protective equipment and safety protocols. Tu Guía Viajera or the operator in charge may restrict a user’s participation if it is determined that their condition compromises their safety or that of the group.'
      )
    ),
    section(
      '16. Pertenencias personales',
      '16. Personal belongings',
      paragraph(
        'El cliente es responsable del cuidado y custodia de sus pertenencias personales, dispositivos electrónicos, equipaje y objetos de valor durante la realización de los servicios o traslados.',
        'The client is responsible for the care and custody of their personal belongings, electronic devices, luggage and valuables during the performance of the services or transfers.'
      ),
      paragraph(
        'Tu Guía Viajera no se hace responsable por extravíos, robos, olvidos o daños en los objetos personales de los usuarios durante el desarrollo de las actividades, salvo cuando exista responsabilidad directa imputable por negligencia grave comprobada conforme a la legislación aplicable.',
        'Tu Guía Viajera is not responsible for loss, theft, misplacement or damage to users’ personal objects during the development of the activities, except where there is direct liability attributable to proven gross negligence in accordance with applicable legislation.'
      )
    ),
    section(
      '17. Fuerza mayor y caso fortuito',
      '17. Force majeure and fortuitous events',
      paragraph(
        'Tu Guía Viajera no será responsable del incumplimiento o retraso en las obligaciones contraídas cuando este sea causado por eventos fuera de su control razonable, tales como desastres naturales, eventos meteorológicos graves, huelgas, bloqueos viales, emergencias sanitarias, actos de autoridades o fallas generales en redes de transporte y servicios públicos.',
        'Tu Guía Viajera will not be responsible for non-performance or delay in the obligations undertaken when caused by events beyond its reasonable control, such as natural disasters, severe weather events, strikes, road blockades, health emergencies, acts of authorities or general failures in transport and public service networks.'
      )
    ),
    section(
      '18. Propiedad intelectual',
      '18. Intellectual property',
      paragraph(
        'Todo el contenido visual, textual, marcas, logotipos, elementos gráficos, diseño del sitio, fotografías y código fuente de tuguiaviajera.com son propiedad exclusiva de Tu Guía Viajera o cuentan con la debida licencia de uso.',
        'All visual and textual content, trademarks, logos, graphic elements, site design, photographs and source code of tuguiaviajera.com are the exclusive property of Tu Guía Viajera or are duly licensed for use.'
      ),
      paragraph(
        'Queda estrictamente prohibida la reproducción, copia, distribución o comercialización de cualquier elemento del sitio web sin la autorización previa y por escrito de Tu Guía Viajera.',
        'The reproduction, copying, distribution or commercialization of any element of the website without the prior written authorization of Tu Guía Viajera is strictly prohibited.'
      )
    ),
    section(
      '19. Uso adecuado del sitio web',
      '19. Proper use of the website',
      paragraph(
        'El usuario se obliga a utilizar el sitio web de conformidad con la ley y la moral. Queda prohibido ingresar virus, realizar ataques cibernéticos, extraer datos masivos mediante scraping, o utilizar los formularios para el envío de información falsa, engañosa o spam.',
        'The user agrees to use the website in accordance with the law and morality. It is prohibited to introduce viruses, carry out cyberattacks, extract mass data through scraping, or use the forms to send false, misleading or spam information.'
      ),
      paragraph(
        'Tu Guía Viajera se reserva el derecho de restringir o bloquear el acceso al sitio a cualquier usuario que haga un uso indebido de la plataforma.',
        'Tu Guía Viajera reserves the right to restrict or block access to the site for any user who makes improper use of the platform.'
      )
    ),
    section(
      '20. Enlaces a terceros',
      '20. Third-party links',
      paragraph(
        'Nuestro sitio web puede contener enlaces hacia páginas o plataformas operadas por terceros. Tu Guía Viajera no ejerce control sobre los contenidos, términos o políticas de privacidad de dichos sitios externos, por lo que el acceso a los mismos queda bajo la responsabilidad del usuario.',
        'Our website may contain links to pages or platforms operated by third parties. Tu Guía Viajera does not exercise control over the content, terms or privacy policies of such external sites, so access to them is the responsibility of the user.'
      )
    ),
    section(
      '21. Protección de datos personales',
      '21. Protection of personal data',
      paragraph(
        'La recolección y tratamiento de tus datos personales a través del sitio web o durante la contratación de nuestros servicios se rige por lo dispuesto en nuestra Política de Privacidad.',
        'The collection and processing of your personal data through the website or during the contracting of our services is governed by the provisions of our Privacy Policy.'
      )
    ),
    section(
      '22. Comunicaciones',
      '22. Communications',
      paragraph(
        'Toda comunicación formal relacionada con cotizaciones, aclaraciones, reservaciones, cambios o cancelaciones deberá realizarse por escrito a través del correo electrónico atencion@tuguiaviajera.com o mediante los canales oficiales señalados en el sitio.',
        'All formal communication related to quotes, clarifications, reservations, changes or cancellations must be made in writing through the email address atencion@tuguiaviajera.com or through the official channels indicated on the site.'
      ),
      paragraph(
        'Es responsabilidad del cliente mantener sus datos de contacto actualizados para recibir notificaciones sobre sus servicios contratados.',
        'It is the client’s responsibility to keep their contact details up to date in order to receive notifications about their contracted services.'
      )
    ),
    section(
      '23. Modificaciones de los Términos y Condiciones',
      '23. Changes to the Terms and Conditions',
      paragraph(
        'Tu Guía Viajera se reserva el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento sin previo aviso para adaptarlos a novedades legislativas, jurisprudenciales o de operación comercial.',
        'Tu Guía Viajera reserves the right to update or modify these Terms and Conditions at any time without prior notice in order to adapt them to legislative, jurisprudential or commercial operation developments.'
      ),
      paragraph(
        'La versión actualizada estará siempre disponible en el sitio web tuguiaviajera.com. Las modificaciones no afectarán las condiciones de servicios que hayan sido previamente confirmados, salvo por disposiciones legales o causas de fuerza mayor.',
        'The updated version will always be available on the website tuguiaviajera.com. The modifications will not affect the conditions of services that have been previously confirmed, except for legal provisions or force majeure.'
      )
    ),
    section(
      '24. Legislación aplicable y jurisdicción',
      '24. Applicable law and jurisdiction',
      paragraph(
        'Los presentes Términos y Condiciones se rigen e interpretan conforme a las leyes vigentes de los Estados Unidos Mexicanos. Para la solución de cualquier controversia derivada del uso del sitio web o de la prestación de nuestros servicios, las partes acuerdan someterse expresamente a la jurisdicción de los tribunales competentes en la Ciudad de México, renunciando a cualquier otro fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.',
        'These Terms and Conditions are governed by and interpreted in accordance with the laws in force in the United Mexican States. For the resolution of any dispute arising from the use of the website or the provision of our services, the parties agree to expressly submit to the jurisdiction of the competent courts in Mexico City, waiving any other forum that could correspond to them by reason of their present or future domiciles.'
      )
    ),
    section(
      '25. Datos de contacto',
      '25. Contact details',
      paragraph(
        'Para cualquier duda, aclaración o comentario relacionado con los presentes Términos y Condiciones, puedes ponerte en contacto con nosotros:',
        'For any question, clarification or comment related to these Terms and Conditions, you can contact us:'
      ),
      paragraph('Tu Guía Viajera', 'Tu Guía Viajera'),
      bullets(
        [
          'Dirección: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX',
          'Correo electrónico: atencion@tuguiaviajera.com',
          'Teléfono: +52 1 55 5662 5469',
          'Sitio web: tuguiaviajera.com',
        ],
        [
          'Address: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX',
          'Email: atencion@tuguiaviajera.com',
          'Phone: +52 1 55 5662 5469',
          'Website: tuguiaviajera.com',
        ]
      )
    ),
  ],
};
