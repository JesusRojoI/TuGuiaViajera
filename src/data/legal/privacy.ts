import {
  bullets,
  paragraph,
  section,
  subheading,
  type LegalDocument,
} from './shared';

export const privacyDocument: LegalDocument = {
  title: {
    es: 'Política de privacidad',
    en: 'Privacy Policy',
  },
  updated: {
    es: 'Noviembre de 2026',
    en: 'November 2026',
  },
  intro: [
    {
      es: 'En Tu Guía Viajera nos comprometemos a proteger la privacidad y seguridad de los datos personales que nos proporciones a través de nuestro sitio web, formularios de contacto, solicitudes de cotización, reservaciones y demás medios de comunicación relacionados con nuestros servicios turísticos y de entretenimiento.',
      en: 'At Tu Guía Viajera we are committed to protecting the privacy and security of the personal data you provide to us through our website, contact forms, quote requests, reservations and other means of communication related to our tourism and entertainment services.',
    },
    {
      es: 'La presente Política de Privacidad tiene como finalidad informarte sobre qué datos personales recabamos, para qué los utilizamos, cómo los protegemos y cuáles son tus derechos respecto de dichos datos.',
      en: 'The purpose of this Privacy Policy is to inform you about what personal data we collect, what we use it for, how we protect it and what your rights are with respect to such data.',
    },
  ],
  sections: [
    section(
      '1. Responsable del tratamiento de los datos personales',
      '1. Data controller',
      paragraph(
        'El responsable del tratamiento y protección de tus datos personales es:',
        'The party responsible for the processing and protection of your personal data is:'
      ),
      bullets(
        [
          'Nombre comercial: Tu Guía Viajera',
          'Domicilio: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX',
          'Correo electrónico: atencion@tuguiaviajera.com',
          'Teléfono: +52 1 55 5662 5469',
        ],
        [
          'Trade name: Tu Guía Viajera',
          'Address: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX',
          'Email: atencion@tuguiaviajera.com',
          'Phone: +52 1 55 5662 5469',
        ]
      ),
      paragraph(
        'Para cualquier asunto relacionado con esta Política de Privacidad o con el tratamiento de tus datos personales, puedes comunicarte con nosotros a través del correo electrónico atencion@tuguiaviajera.com.',
        'For any matter related to this Privacy Policy or the processing of your personal data, you may contact us at atencion@tuguiaviajera.com.'
      )
    ),
    section(
      '2. Datos personales que podemos recabar',
      '2. Personal data we may collect',
      paragraph(
        'Dependiendo de la interacción que tengas con nosotros, podremos recabar las siguientes categorías de datos personales:',
        'Depending on how you interact with us, we may collect the following categories of personal data:'
      ),
      subheading(
        'Datos de identificación y contacto',
        'Identification and contact data'
      ),
      bullets(
        [
          'Nombre completo.',
          'Correo electrónico.',
          'Número telefónico.',
          'Dirección o ubicación (cuando aplique).',
          'Información proporcionada voluntariamente mediante formularios de contacto, chat o canales de comunicación directa.',
        ],
        [
          'Full name.',
          'Email address.',
          'Phone number.',
          'Address or location (when applicable).',
          'Information provided voluntarily through contact forms, chat or direct communication channels.',
        ]
      ),
      subheading(
        'Datos relacionados con la experiencia o servicio',
        'Data related to the experience or service'
      ),
      paragraph(
        'Cuando solicites una cotización, diseñemos una experiencia o contrates alguno de nuestros servicios, podremos solicitar información necesaria para preparar y prestar la experiencia, como:',
        'When you request a quote, we design an experience or you contract any of our services, we may request information necessary to prepare and provide the experience, such as:'
      ),
      bullets(
        [
          'Fechas tentativas del servicio o evento.',
          'Destinos o sedes de interés.',
          'Preferencias y requerimientos de la experiencia.',
          'Tipo de servicio o paquete solicitado.',
          'Número de participantes o visitantes.',
          'Presupuesto estimado.',
          'Información necesaria para coordinar y realizar la reservación correspondiente.',
        ],
        [
          'Tentative dates of the service or event.',
          'Destinations or venues of interest.',
          'Preferences and requirements for the experience.',
          'Type of service or package requested.',
          'Number of participants or visitors.',
          'Estimated budget.',
          'Information necessary to coordinate and make the corresponding reservation.',
        ]
      ),
      paragraph(
        'Únicamente solicitaremos los datos que resulten necesarios para atender tu solicitud, preparar una propuesta, gestionar una reservación o prestar los servicios contratados.',
        'We will only request the data that is necessary to handle your request, prepare a proposal, manage a reservation or provide the contracted services.'
      )
    ),
    section(
      '3. Datos personales sensibles',
      '3. Sensitive personal data',
      paragraph(
        'Tu Guía Viajera no solicita de manera ordinaria datos personales sensibles a través del sitio web.',
        'Tu Guía Viajera does not ordinarily request sensitive personal data through the website.'
      ),
      paragraph(
        'En caso de que, para la adecuada prestación de un servicio, resulte indispensable conocer algún dato que pueda considerarse sensible conforme a la legislación aplicable (como especificaciones médicas, de movilidad o restricciones alimentarias para la realización de una actividad), se solicitará el consentimiento correspondiente cuando éste sea legalmente necesario y se utilizará únicamente para la finalidad específica para la cual fue recabado.',
        'If, for the proper provision of a service, it is essential to know any data that may be considered sensitive under applicable legislation (such as medical or mobility specifications, or dietary restrictions for carrying out an activity), the corresponding consent will be requested when legally necessary and it will be used only for the specific purpose for which it was collected.'
      ),
      paragraph(
        'Te recomendamos no proporcionar mediante formularios de contacto información sensible que no sea necesaria para la atención de tu solicitud.',
        'We recommend that you do not provide sensitive information through contact forms that is not necessary to handle your request.'
      )
    ),
    section(
      '4. Finalidades del tratamiento',
      '4. Purposes of processing',
      paragraph(
        'Los datos personales que nos proporciones podrán ser utilizados para las siguientes finalidades:',
        'The personal data you provide to us may be used for the following purposes:'
      ),
      subheading('Finalidades primarias', 'Primary purposes'),
      paragraph(
        'Son aquellas necesarias para atender tu solicitud y proporcionar nuestros servicios:',
        'These are the purposes necessary to handle your request and provide our services:'
      ),
      bullets(
        [
          'Atender preguntas, comentarios y solicitudes de información.',
          'Responder solicitudes de cotización.',
          'Diseñar, personalizar y gestionar las experiencias y servicios solicitados.',
          'Conocer tus intereses, fechas tentativas y presupuesto para elaborar propuestas ajustadas.',
          'Gestionar reservaciones, accesos y confirmaciones de agenda.',
          'Dar seguimiento a las propuestas realizadas.',
          'Coordinar la prestación operativa de los servicios.',
          'Mantener comunicación contigo antes, durante y después de la prestación del servicio.',
          'Proporcionar atención, soporte y asistencia técnica o logística.',
          'Gestionar pagos, facturación y comprobantes fiscales cuando corresponda.',
          'Cumplir obligaciones legales y contractuales.',
          'Atender aclaraciones, cancelaciones, devoluciones o solicitudes relacionadas con los servicios contratados.',
          'Mantener registros administrativos y operativos necesarios.',
        ],
        [
          'Answer questions, comments and requests for information.',
          'Respond to quote requests.',
          'Design, customize and manage the requested experiences and services.',
          'Learn about your interests, tentative dates and budget in order to prepare tailored proposals.',
          'Manage reservations, access and schedule confirmations.',
          'Follow up on proposals made.',
          'Coordinate the operational delivery of services.',
          'Maintain communication with you before, during and after the provision of the service.',
          'Provide customer service, support and technical or logistical assistance.',
          'Manage payments, invoicing and tax receipts when applicable.',
          'Comply with legal and contractual obligations.',
          'Handle clarifications, cancellations, refunds or requests related to the contracted services.',
          'Maintain the necessary administrative and operational records.',
        ]
      ),
      subheading('Finalidades secundarias', 'Secondary purposes'),
      paragraph(
        'De manera adicional, podremos utilizar tus datos para:',
        'Additionally, we may use your data to:'
      ),
      bullets(
        [
          'Enviar información sobre nuevas experiencias, promociones, paquetes y servicios.',
          'Realizar encuestas de satisfacción y calidad en el servicio.',
          'Solicitar opiniones o comentarios sobre la experiencia.',
          'Mejorar nuestros servicios y la atención al cliente.',
          'Elaborar estadísticas internas y análisis de uso del sitio.',
          'Enviar comunicaciones comerciales y publicitarias.',
        ],
        [
          'Send information about new experiences, promotions, packages and services.',
          'Conduct satisfaction and service quality surveys.',
          'Request opinions or comments about the experience.',
          'Improve our services and customer service.',
          'Prepare internal statistics and website usage analysis.',
          'Send commercial and advertising communications.',
        ]
      ),
      paragraph(
        'Si no deseas que tus datos sean utilizados para alguna de las finalidades secundarias, podrás manifestarlo en cualquier momento enviando un correo electrónico a atencion@tuguiaviajera.com.',
        'If you do not want your data to be used for any of the secondary purposes, you may state this at any time by sending an email to atencion@tuguiaviajera.com.'
      ),
      paragraph(
        'La negativa para el uso de tus datos personales para finalidades secundarias no será motivo para negar los servicios o productos que hayas solicitado o contratado.',
        'Refusal to use your personal data for secondary purposes will not be a reason to deny the services or products you have requested or contracted.'
      )
    ),
    section(
      '5. Base legal para el tratamiento',
      '5. Legal basis for processing',
      paragraph(
        'El tratamiento de tus datos personales se realizará conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y demás legislación mexicana aplicable.',
        'The processing of your personal data will be carried out in accordance with the Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP) and other applicable Mexican legislation.'
      ),
      paragraph(
        'Dependiendo de la finalidad, trataremos tus datos con base en:',
        'Depending on the purpose, we will process your data based on:'
      ),
      bullets(
        [
          'Tu consentimiento expreso o tácito.',
          'La necesidad de ejecutar o preparar un contrato o la prestación de un servicio solicitado.',
          'El cumplimiento de obligaciones legales y administrativas.',
          'Nuestro interés legítimo para la mejora y seguridad de los servicios, respetando en todo momento tus derechos y libertades.',
        ],
        [
          'Your express or implied consent.',
          'The need to perform or prepare a contract or provide a requested service.',
          'Compliance with legal and administrative obligations.',
          'Our legitimate interest in improving and securing the services, while always respecting your rights and freedoms.',
        ]
      )
    ),
    section(
      '6. Uso de formularios del sitio web',
      '6. Use of website forms',
      paragraph(
        'Nuestro sitio web tuguiaviajera.com cuenta con formularios mediante los cuales puedes proporcionar datos como nombre, correo electrónico, teléfono y mensaje para solicitar información, cotizaciones o atención personalizada.',
        'Our website tuguiaviajera.com has forms through which you can provide data such as your name, email address, telephone number and message to request information, quotes or personalized assistance.'
      ),
      paragraph(
        'Los datos proporcionados mediante dichos formularios serán utilizados para:',
        'The data provided through these forms will be used to:'
      ),
      bullets(
        [
          'Identificar y contactar al solicitante.',
          'Atender la consulta o requerimiento específico.',
          'Preparar y enviar cotizaciones o propuestas.',
          'Dar seguimiento oportuno a las solicitudes.',
        ],
        [
          'Identify and contact the requester.',
          'Handle the specific query or request.',
          'Prepare and send quotes or proposals.',
          'Provide timely follow-up on requests.',
        ]
      ),
      paragraph(
        'No deberás proporcionar información personal de terceros sin contar previamente con la autorización correspondiente del titular.',
        'You should not provide personal information of third parties without the prior corresponding authorization from the data subject.'
      )
    ),
    section(
      '7. Transferencia de datos personales',
      '7. Transfer of personal data',
      paragraph(
        'Para poder diseñar, coordinar y ejecutar determinadas experiencias o servicios, podremos compartir los datos estrictamente necesarios con proveedores y socios comerciales que participen en la operación de los servicios contratados.',
        'In order to design, coordinate and carry out certain experiences or services, we may share the strictly necessary data with suppliers and business partners involved in the operation of the contracted services.'
      ),
      paragraph(
        'Estos terceros pueden incluir, según el tipo de servicio:',
        'These third parties may include, depending on the type of service:'
      ),
      bullets(
        [
          'Operadores logísticos y de experiencias.',
          'Guías, instructores o personal operativo de las actividades.',
          'Proveedores de transporte o accesos a recintos/instalaciones.',
          'Establecimientos de hospedaje, alimentos o experiencias complementarias.',
          'Plataformas de gestión e intermediarios de servicios turísticos o de entretenimiento.',
        ],
        [
          'Logistics and experience operators.',
          'Guides, instructors or operational staff for the activities.',
          'Transport providers or access to venues/facilities.',
          'Lodging, food or complementary experience establishments.',
          'Management platforms and intermediaries for tourism or entertainment services.',
        ]
      ),
      paragraph(
        'Cuando exista una transferencia de datos, procuraremos compartir únicamente la información indispensable para cumplir con la finalidad correspondiente y exigiremos a los terceros mantener las medidas de seguridad administrativas, técnicas y físicas adecuadas conforme a la ley.',
        'When there is a transfer of data, we will endeavor to share only the information essential to fulfill the corresponding purpose and we will require third parties to maintain adequate administrative, technical and physical security measures in accordance with the law.'
      ),
      paragraph(
        'Asimismo, se podrán realizar transferencias sin requerir consentimiento cuando sean requeridas por autoridad competente conforme a derecho o sea necesario para el cumplimiento de una obligación legal.',
        'Likewise, transfers may be made without requiring consent when they are required by a competent authority in accordance with the law or are necessary to comply with a legal obligation.'
      )
    ),
    section(
      '8. Proveedores de servicios tecnológicos',
      '8. Technology service providers',
      paragraph(
        'Para operar nuestro sitio web tuguiaviajera.com y gestionar nuestras operaciones digitales, podemos recurrir a terceros prestadores de servicios tecnológicos (servidores de alojamiento web, plataformas de correo electrónico, herramientas de análisis de datos, sistemas CRM y pasarelas de pago).',
        'To operate our website tuguiaviajera.com and manage our digital operations, we may use third-party technology service providers (web hosting servers, email platforms, data analysis tools, CRM systems and payment gateways).'
      ),
      paragraph(
        'Estos proveedores tendrán acceso a la información únicamente en la medida necesaria para prestar sus servicios a Tu Guía Viajera y bajo compromisos de confidencialidad y protección de datos.',
        'These providers will have access to the information only to the extent necessary to provide their services to Tu Guía Viajera and under confidentiality and data protection commitments.'
      )
    ),
    section(
      '9. Pagos y datos financieros',
      '9. Payments and financial data',
      paragraph(
        'Cuando realices un pago relacionado con nuestros servicios a través de medios digitales, los datos financieros y de tarjetas bancarias serán procesados directamente por las plataformas de pago electrónicas autorizadas.',
        'When you make a payment related to our services through digital means, financial and bank card data will be processed directly by authorized electronic payment platforms.'
      ),
      paragraph(
        'Tu Guía Viajera no almacena ni conserva directamente números completos de tarjetas de crédito o débito en sus servidores web. Conservaremos únicamente la información contable y comprobantes necesarios para la acreditación de pagos, facturación y cumplimiento fiscal aplicable.',
        'Tu Guía Viajera does not directly store or retain complete credit or debit card numbers on its web servers. We will retain only the accounting information and receipts necessary for payment verification, invoicing and applicable tax compliance.'
      )
    ),
    section(
      '10. Cookies y tecnologías similares',
      '10. Cookies and similar technologies',
      paragraph(
        'Nuestro sitio web utiliza cookies, balizas (beacons) y tecnologías similares para facilitar la navegación, personalizar el contenido, analizar el tráfico del sitio y mejorar tu experiencia como usuario.',
        'Our website uses cookies, beacons and similar technologies to facilitate browsing, personalize content, analyze site traffic and improve your experience as a user.'
      ),
      paragraph(
        'Estas tecnologías permiten recopilar información como:',
        'These technologies make it possible to collect information such as:'
      ),
      bullets(
        [
          'Dirección IP y tipo de navegador.',
          'Sistema operativo y tipo de dispositivo.',
          'Páginas visitadas dentro del sitio y tiempo de permanencia.',
          'Enlaces consultados y origen de la visita.',
        ],
        [
          'IP address and browser type.',
          'Operating system and device type.',
          'Pages visited within the site and time spent.',
          'Links consulted and source of the visit.',
        ]
      ),
      paragraph(
        'Puedes configurar o desactivar el uso de cookies directamente desde la configuración de tu navegador web. Toma en cuenta que la desactivación de ciertas cookies podría afectar la funcionalidad o el correcto despliegue de algunas secciones de tuguiaviajera.com.',
        'You can configure or disable the use of cookies directly from your web browser settings. Please note that disabling certain cookies could affect the functionality or proper display of some sections of tuguiaviajera.com.'
      )
    ),
    section(
      '11. Conservación de los datos personales',
      '11. Retention of personal data',
      paragraph(
        'Conservaremos tus datos personales únicamente durante el tiempo que sea necesario para cumplir con las finalidades para las que fueron recabados, así como para cumplir con las obligaciones legales, contables, fiscales y administrativas correspondientes.',
        'We will retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, as well as to comply with the corresponding legal, accounting, tax and administrative obligations.'
      ),
      paragraph(
        'Una vez concluidos los plazos legales o la finalidad del tratamiento, la información será eliminada, blocked o anonimizada conforme a la normativa vigente.',
        'Once the legal periods or the purpose of the processing have ended, the information will be deleted, blocked or anonymized in accordance with current regulations.'
      )
    ),
    section(
      '12. Medidas de seguridad',
      '12. Security measures',
      paragraph(
        'Tu Guía Viajera implementa y mantiene medidas de seguridad administrativas, técnicas y físicas diseñadas para proteger tus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado.',
        'Tu Guía Viajera implements and maintains administrative, technical and physical security measures designed to protect your personal data against damage, loss, alteration, destruction, unauthorized use, access or processing.'
      ),
      paragraph(
        'El acceso a la información personal está restringido exclusivamente al personal y colaboradores autorizados que requieran conocerla para desempeñar sus funciones relativas a las finalidades señaladas.',
        'Access to personal information is restricted exclusively to authorized personnel and collaborators who need to know it to perform their duties related to the purposes indicated.'
      )
    ),
    section(
      '13. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)',
      '13. ARCO rights (Access, Rectification, Cancellation and Objection)',
      paragraph(
        'Como titular de los datos personales, tienes derecho a ejercer tus derechos ARCO conforme a la legislación aplicable:',
        'As the data subject, you have the right to exercise your ARCO rights in accordance with applicable legislation:'
      ),
      bullets(
        [
          'Acceso: Conocer qué datos personales tenemos registrados, para qué los utilizamos y las condiciones de su uso.',
          'Rectificación: Solicitar la corrección de tu información personal en caso de que esté desactualizada, sea inexacta o esté incompleta.',
          'Cancelación: Solicitar la eliminación de tus datos de nuestros registros cuando consideres que no están siendo utilizados conforme a los principios y deberes legales.',
          'Oposición: Oponerte al uso de tus datos personales para finalidades específicas (por ejemplo, fines mercadotécnicos).',
        ],
        [
          'Access: Know what personal data we have recorded, what we use it for and the conditions of its use.',
          'Rectification: Request correction of your personal information if it is outdated, inaccurate or incomplete.',
          'Cancellation: Request the deletion of your data from our records when you consider that it is not being used in accordance with legal principles and duties.',
          'Objection: Object to the use of your personal data for specific purposes (for example, marketing purposes).',
        ]
      ),
      paragraph(
        'Para ejercer cualquiera de los derechos ARCO, deberás enviar una solicitud formal al correo electrónico: atencion@tuguiaviajera.com.',
        'To exercise any of the ARCO rights, you must send a formal request to the email address: atencion@tuguiaviajera.com.'
      ),
      paragraph(
        'La solicitud deberá incluir:',
        'The request must include:'
      ),
      bullets(
        [
          'Nombre completo del titular y medio de contacto para notificar la respuesta (correo electrónico).',
          'Documento de identificación oficial que acredite la identidad del titular o la representación legal.',
          'Descripción clara y precisa de los datos personales respecto de los cuales se busca ejercer alguno de los derechos ARCO.',
          'Cualquier elemento o documento que facilite la localización de los datos.',
        ],
        [
          'Full name of the data subject and contact method to notify the response (email address).',
          'Official identification document proving the identity of the data subject or legal representation.',
          'Clear and precise description of the personal data for which any of the ARCO rights is being exercised.',
          'Any element or document that facilitates locating the data.',
        ]
      ),
      paragraph(
        'Atenderemos y resolveremos tu solicitud conforme a los plazos establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
        'We will handle and resolve your request in accordance with the deadlines established by the Federal Law on the Protection of Personal Data Held by Private Parties.'
      )
    ),
    section(
      '14. Revocación del consentimiento',
      '14. Revocation of consent',
      paragraph(
        'Puedes revocar en cualquier momento el consentimiento que nos hayas otorgado para el tratamiento de tus datos personales enviando un correo a atencion@tuguiaviajera.com.',
        'You may revoke at any time the consent you have given us for the processing of your personal data by sending an email to atencion@tuguiaviajera.com.'
      ),
      paragraph(
        'Es importante considerar que la revocación del consentimiento no tiene efectos retroactivos y que en ciertos casos no podremos concluir el tratamiento de forma inmediata si existe alguna obligación legal o contractual que nos exija conservar la información.',
        'It is important to consider that revocation of consent does not have retroactive effects and that in certain cases we may not be able to conclude the processing immediately if there is any legal or contractual obligation requiring us to retain the information.'
      )
    ),
    section(
      '15. Limitación del uso o divulgación',
      '15. Limitation of use or disclosure',
      paragraph(
        'Si deseas limitar el uso o divulgación de tus datos personales para dejar de recibir publicidad, avisos promocionales o boletines por correo electrónico, puedes enviarnos tu solicitud a atencion@tuguiaviajera.com o hacer uso del enlace de cancelación de suscripción incluido en la parte inferior de los correos electrónicos informativos que te enviemos.',
        'If you wish to limit the use or disclosure of your personal data in order to stop receiving advertising, promotional notices or email newsletters, you can send us your request at atencion@tuguiaviajera.com or use the unsubscribe link included at the bottom of the informative emails we send you.'
      )
    ),
    section(
      '16. Protección de menores de edad',
      '16. Protection of minors',
      paragraph(
        'Los servicios ofertados a través de nuestro sitio web no están dirigidos de manera directa e independiente a menores de edad.',
        'The services offered through our website are not directly and independently aimed at minors.'
      ),
      paragraph(
        'En los casos en que se recaben datos de menores para la logística o contratación de una experiencia solicitada por un padre, madre, tutor o representante legal, dicha información será tratada con estricta confidencialidad y únicamente para las finalidades del servicio contratado.',
        'In cases where data of minors is collected for the logistics or contracting of an experience requested by a parent, guardian or legal representative, such information will be treated with strict confidentiality and only for the purposes of the contracted service.'
      )
    ),
    section(
      '17. Modificaciones a esta Política de Privacidad',
      '17. Changes to this Privacy Policy',
      paragraph(
        'Tu Guía Viajera se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones a la presente Política de Privacidad para la atención de novedades legislativas, jurisprudenciales, políticas internas o nuevos requerimientos para la prestación de nuestros servicios.',
        'Tu Guía Viajera reserves the right to make changes or updates to this Privacy Policy at any time in order to address legislative or jurisprudential developments, internal policies or new requirements for the provision of our services.'
      ),
      paragraph(
        'Cualquier cambio o actualización estará disponible para su consulta permanente en el sitio web: https://tuguiaviajera.com/',
        'Any change or update will be permanently available for consultation on the website: https://tuguiaviajera.com/'
      )
    ),
    section(
      '18. Consentimiento',
      '18. Consent',
      paragraph(
        'Al navegar en nuestro sitio web, enviar formularios de contacto, solicitar cotizaciones o contratar los servicios ofrecidos por Tu Guía Viajera, reconoces haber leído y comprendido la presente Política de Privacidad y manifiestas tu conformidad con los términos y condiciones aquí establecidos.',
        'By browsing our website, submitting contact forms, requesting quotes or contracting the services offered by Tu Guía Viajera, you acknowledge that you have read and understood this Privacy Policy and express your agreement with the terms and conditions set forth herein.'
      )
    ),
    section(
      '19. Medios de contacto',
      '19. Contact details',
      paragraph(
        'Si tienes dudas, comentarios o deseas ejercer tus derechos relacionados con la protección de tus datos personales, puedes contactar al área responsable en:',
        'If you have questions, comments or wish to exercise your rights related to the protection of your personal data, you can contact the responsible area at:'
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
