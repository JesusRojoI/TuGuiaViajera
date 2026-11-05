import {
  bullets,
  paragraph,
  section,
  type LegalDocument,
} from './shared';

export const refundsDocument: LegalDocument = {
  title: {
    es: 'Política de devoluciones y reembolsos',
    en: 'Returns and Refund Policy',
  },
  updated: {
    es: 'Noviembre de 2026',
    en: 'November 2026',
  },
  intro: [
    {
      es: 'En Tu Guía Viajera buscamos brindar experiencias turísticas y de entretenimiento de alta calidad, con una planeación clara y atención personalizada durante todo el proceso. Debido a la naturaleza de los servicios, las condiciones de cancelación, modificación y reembolso pueden variar dependiendo del tipo de experiencia, la fecha de reservación y los proveedores involucrados.',
      en: 'At Tu Guía Viajera we seek to provide high-quality tourism and entertainment experiences, with clear planning and personalized attention throughout the entire process. Due to the nature of the services, the cancellation, modification and refund conditions may vary depending on the type of experience, the reservation date and the suppliers involved.',
    },
    {
      es: 'La presente Política de Reembolsos y Devoluciones establece las condiciones aplicables a las solicitudes de cancelación, modificación y reembolso de los servicios contratados con Tu Guía Viajera.',
      en: 'This Returns and Refund Policy establishes the conditions applicable to requests for cancellation, modification and refund of the services contracted with Tu Guía Viajera.',
    },
  ],
  sections: [
    section(
      '1. Alcance de la política',
      '1. Scope of the policy',
      paragraph(
        'Esta política aplica a todos los servicios y experiencias contratados a través de Tu Guía Viajera, incluyendo itinerarios personalizados, tours, actividades culturales, experiencias de naturaleza y aventura, actividades acuáticas, experiencias gastronómicas, catas, eventos urbanos y demás servicios turísticos u operativos ofrecidos.',
        'This policy applies to all services and experiences contracted through Tu Guía Viajera, including personalized itineraries, tours, cultural activities, nature and adventure experiences, water activities, culinary experiences, tastings, urban events and other tourism or operational services offered.'
      ),
      paragraph(
        'Cada reservación podrá estar sujeta a condiciones particulares que serán comunicadas al cliente antes de confirmar el servicio.',
        'Each reservation may be subject to particular conditions that will be communicated to the client before confirming the service.'
      )
    ),
    section(
      '2. Condiciones generales',
      '2. General conditions',
      paragraph(
        'Todos los servicios están sujetos a disponibilidad al momento de realizar la reservación.',
        'All services are subject to availability at the time of making the reservation.'
      ),
      paragraph(
        'Debido a que determinadas experiencias requieren la contratación o coordinación de proveedores externos (como transportistas, recintos, guías o establecimientos de hospedaje), las condiciones de cancelación y reembolso dependen en gran medida de las políticas establecidas por dichos terceros.',
        'Because certain experiences require the contracting or coordination of external suppliers (such as transport companies, venues, guides or lodging establishments), the cancellation and refund conditions depend to a large extent on the policies established by such third parties.'
      ),
      paragraph(
        'Antes de realizar un pago o confirmar una reservación, se recomienda revisar detalladamente las condiciones específicas indicadas en la cotización o confirmación del servicio. La aceptación de una cotización y el pago correspondiente implican la aceptación implícita de las condiciones particulares aplicables a la experiencia contratada.',
        'Before making a payment or confirming a reservation, it is recommended that you carefully review the specific conditions indicated in the quote or service confirmation. Acceptance of a quote and the corresponding payment imply implicit acceptance of the particular conditions applicable to the contracted experience.'
      )
    ),
    section(
      '3. Solicitudes de cancelación',
      '3. Cancellation requests',
      paragraph(
        'Todas las solicitudes de cancelación deberán realizarse formalmente por escrito mediante el correo electrónico: atencion@tuguiaviajera.com',
        'All cancellation requests must be made formally in writing through the email address: atencion@tuguiaviajera.com'
      ),
      paragraph(
        'La solicitud deberá incluir los siguientes datos:',
        'The request must include the following information:'
      ),
      bullets(
        [
          'Nombre completo de la persona que realizó la reservación.',
          'Número o referencia de la reservación o cotización.',
          'Fecha programada para la experiencia.',
          'Servicio o paquete contratado.',
          'Motivo de la cancelación.',
          'Datos de contacto para dar seguimiento a la solicitud.',
        ],
        [
          'Full name of the person who made the reservation.',
          'Reservation or quote number or reference.',
          'Scheduled date of the experience.',
          'Service or package contracted.',
          'Reason for cancellation.',
          'Contact details for following up on the request.',
        ]
      ),
      paragraph(
        'La fecha y hora en que Tu Guía Viajera reciba la solicitud por correo electrónico será la considerada oficialmente para determinar la procedencia y los porcentajes o cargos de cancelación aplicables.',
        'The date and time on which Tu Guía Viajera receives the request by email will be the one officially considered to determine the applicability and the applicable cancellation percentages or charges.'
      )
    ),
    section(
      '4. Cancelaciones con derecho a reembolso',
      '4. Cancellations eligible for a refund',
      paragraph(
        'Cuando las condiciones particulares de la experiencia permitan una cancelación con reembolso, el importe correspondiente será determinado de acuerdo con:',
        'When the particular conditions of the experience allow a cancellation with refund, the corresponding amount will be determined in accordance with:'
      ),
      bullets(
        [
          'La anticipación con la que se solicite la cancelación previa a la fecha del servicio.',
          'El tipo de servicio o paquete contratado.',
          'Las condiciones informadas expresamente en la cotización o confirmación.',
          'Los gastos administrativos o de gestión ya realizados.',
          'Los importes no reembolsables retenidos por proveedores externos.',
        ],
        [
          'How far in advance the cancellation is requested before the service date.',
          'The type of service or package contracted.',
          'The conditions expressly informed in the quote or confirmation.',
          'Administrative or management expenses already incurred.',
          'Non-refundable amounts withheld by external suppliers.',
        ]
      ),
      paragraph(
        'Cuando corresponda un reembolso parcial, se descontarán los importes, cargos por servicio, comisiones bancarias o penalizaciones que no sean recuperables.',
        'When a partial refund applies, amounts, service charges, bank commissions or penalties that are not recoverable will be deducted.'
      )
    ),
    section(
      '5. Servicios no reembolsables',
      '5. Non-refundable services',
      paragraph(
        'Algunos servicios pueden ser total o parcialmente no reembolsables debido a compromisos contractuales con terceros o a la naturaleza de cupo limitado de la experiencia.',
        'Some services may be totally or partially non-refundable due to contractual commitments with third parties or the limited-capacity nature of the experience.'
      ),
      paragraph(
        'Entre ellos pueden encontrarse:',
        'These may include:'
      ),
      bullets(
        [
          'Entradas a parques, recintos, sitios históricos o atracciones turísticas.',
          'Actividades con cupo limitado o reservación de fecha exclusiva.',
          'Experiencias gastronómicas o catas con insumos preparados con anticipación.',
          'Servicios de transporte privado contratados bajo demanda.',
          'Reservaciones de hospedaje bajo tarifas no reembolsables.',
          'Actividades acuáticas o de aventura con instructores o guías dedicados.',
          'Servicios adquiridos bajo promociones, descuentos o tarifas especiales.',
          'Cualquier concepto señalado expresamente como "no reembolsable" en la cotización o confirmación.',
        ],
        [
          'Admission to parks, venues, historical sites or tourist attractions.',
          'Activities with limited capacity or exclusive-date reservations.',
          'Culinary experiences or tastings with ingredients prepared in advance.',
          'Private transport services contracted on demand.',
          'Lodging reservations under non-refundable rates.',
          'Water or adventure activities with dedicated instructors or guides.',
          'Services acquired under promotions, discounts or special rates.',
          'Any item expressly indicated as "non-refundable" in the quote or confirmation.',
        ]
      )
    ),
    section(
      '6. Cambios de fecha y reprogramación',
      '6. Date changes and rescheduling',
      paragraph(
        'El cliente podrá solicitar un cambio de fecha para su experiencia. La viabilidad de realizar el cambio dependerá de:',
        'The client may request a date change for their experience. The feasibility of making the change will depend on:'
      ),
      bullets(
        [
          'Disponibilidad de cupo y fechas en la agenda para la nueva fecha solicitada.',
          'Condiciones y políticas de reprogramación de los proveedores participantes.',
          'Tipo de servicio o tarifa contratada.',
          'La anticipación con la que se envíe la solicitud.',
          'Diferencias de precio o tarifa aplicables según la temporada.',
        ],
        [
          'Availability of places and dates in the schedule for the new requested date.',
          'Rescheduling conditions and policies of the participating suppliers.',
          'Type of service or rate contracted.',
          'How far in advance the request is sent.',
          'Price or rate differences applicable depending on the season.',
        ]
      ),
      paragraph(
        'Los cambios solicitados por el cliente podrán generar cargos adicionales o nivelación de tarifas cuando resulten aplicables. Un cambio de fecha no se considerará confirmado hasta que Tu Guía Viajera lo comunique expresamente por escrito al cliente.',
        'Changes requested by the client may generate additional charges or rate adjustments when applicable. A date change will not be considered confirmed until Tu Guía Viajera expressly communicates it to the client in writing.'
      )
    ),
    section(
      '7. Ajustes en el itinerario',
      '7. Itinerary adjustments',
      paragraph(
        'Los itinerarios pueden ajustarse antes o durante la prestación del servicio debido a razones climáticas, logísticas, operativas, de seguridad o causas de fuerza mayor.',
        'Itineraries may be adjusted before or during the provision of the service due to weather, logistical, operational or safety reasons or force majeure.'
      ),
      paragraph(
        'Cuando sea necesario realizar una modificación en el itinerario, se procurará mantener el objetivo principal de la experiencia y ofrecer una alternativa equivalente. Los cambios o adiciones solicitados directamente por el cliente durante el desarrollo de la experiencia generarán costos adicionales que deberán ser cubiertos por el cliente.',
        'When it is necessary to make a modification to the itinerary, efforts will be made to maintain the main objective of the experience and offer an equivalent alternative. Changes or additions requested directly by the client during the development of the experience will generate additional costs that must be covered by the client.'
      )
    ),
    section(
      '8. Cancelación por condiciones climáticas',
      '8. Cancellation due to weather conditions',
      paragraph(
        'Ciertas experiencias al aire libre, en entornos naturales, acuáticos o de aventura dependen directamente de las condiciones del clima.',
        'Certain outdoor experiences in natural, water or adventure environments depend directly on weather conditions.'
      ),
      paragraph(
        'Cuando las condiciones meteorológicas representen un riesgo para la integridad de los participantes o impidan la realización segura de la actividad, Tu Guía Viajera o el operador a cargo podrán modificar, reprogramar o cancelar la experiencia.',
        'When weather conditions represent a risk to the integrity of the participants or prevent the safe performance of the activity, Tu Guía Viajera or the operator in charge may modify, reschedule or cancel the experience.'
      ),
      paragraph(
        'En estos casos, se priorizará la reprogramación de la actividad en una fecha posterior. Si no fuera posible la reprogramación y correspondiera un reembolso conforme a las condiciones de los proveedores involucrados, se informará al cliente sobre el saldo a favor o el procedimiento de devolución aplicable.',
        'In these cases, priority will be given to rescheduling the activity to a later date. If rescheduling is not possible and a refund applies in accordance with the conditions of the suppliers involved, the client will be informed about the credit balance or the applicable refund procedure.'
      )
    ),
    section(
      '9. Cancelación por fuerza mayor o caso fortuito',
      '9. Cancellation due to force majeure or fortuitous events',
      paragraph(
        'Una experiencia podrá ser modificada, reprogramada o cancelada debido a circunstancias fuera del control razonable de Tu Guía Viajera, tales como desastres naturales, emergencias sanitarias, restricciones gubernamentales, cierres viales o de recintos, manifestaciones, o fallas graves en la infraestructura local.',
        'An experience may be modified, rescheduled or cancelled due to circumstances beyond the reasonable control of Tu Guía Viajera, such as natural disasters, health emergencies, government restrictions, road or venue closures, demonstrations or serious failures in local infrastructure.'
      ),
      paragraph(
        'En tales situaciones, Tu Guía Viajera brindará la asistencia posible para ofrecer alternativas de reprogramación, créditos a favor o soluciones coordinadas con los proveedores directos.',
        'In such situations, Tu Guía Viajera will provide the possible assistance to offer rescheduling alternatives, credit balances or solutions coordinated with direct suppliers.'
      )
    ),
    section(
      '10. Cancelaciones por parte de Tu Guía Viajera',
      '10. Cancellations by Tu Guía Viajera',
      paragraph(
        'En circunstancias excepcionales, Tu Guía Viajera podrá cancelar una experiencia cuando no sea posible garantizar la prestación segura o con los estándares de calidad correspondientes.',
        'In exceptional circumstances, Tu Guía Viajera may cancel an experience when it is not possible to guarantee its safe provision or the corresponding quality standards.'
      ),
      paragraph(
        'De presentarse esta situación, se notificará de inmediato al cliente y se le ofrecerá:',
        'If this situation arises, the client will be notified immediately and offered:'
      ),
      bullets(
        [
          'Reprogramación de la experiencia para otra fecha sin costo adicional.',
          'Sustitución por una experiencia o paquete alternativo de valor equivalente.',
          'Crédito a favor para ser utilizado en futuros servicios.',
          'Reembolso del importe pagado sujeto a la recuperación de los fondos comprometidos con terceros.',
        ],
        [
          'Rescheduling of the experience to another date at no additional cost.',
          'Replacement with an alternative experience or package of equivalent value.',
          'Credit balance to be used on future services.',
          'Refund of the amount paid, subject to recovery of the funds committed to third parties.',
        ]
      )
    ),
    section(
      '11. Inasistencia del cliente (No Show)',
      '11. Client no-show',
      paragraph(
        'Si el cliente o los participantes no se presentan en el punto de encuentro, lugar y horario establecidos en la confirmación del servicio, la reservación se considerará como utilizada (No Show).',
        'If the client or the participants do not appear at the meeting point, place and time established in the service confirmation, the reservation will be considered used (No Show).'
      ),
      paragraph(
        'La inasistencia no dará derecho a reembolso, devolución ni reprogramación del servicio, dado que los recursos, personal y logística quedan reservados de forma exclusiva para el grupo o participante. Se recomienda presentarse con al menos 15 minutos de anticipación al horario pactado.',
        'A no-show will not give rise to a refund, return or rescheduling of the service, since the resources, personnel and logistics are reserved exclusively for the group or participant. It is recommended to arrive at least 15 minutes before the agreed time.'
      )
    ),
    section(
      '12. Retrasos por parte del cliente',
      '12. Delays by the client',
      paragraph(
        'Los retrasos ocasionados por el cliente pueden afectar el desarrollo del itinerario programado.',
        'Delays caused by the client may affect the development of the scheduled itinerary.'
      ),
      paragraph(
        'Si un retraso provoca la pérdida de una actividad, reservación, entrada a un recinto o servicio de transporte, los costos adicionales que se generen para la reestructuración del servicio serán responsabilidad exclusiva del cliente. El personal operativo no estará obligado a extender la duración del servicio para compensar el tiempo perdido por retraso del usuario.',
        'If a delay causes the loss of an activity, reservation, entry to a venue or transport service, the additional costs generated for restructuring the service will be the sole responsibility of the client. Operational staff will not be obliged to extend the duration of the service to compensate for time lost due to the user’s delay.'
      )
    ),
    section(
      '13. Gastos no reembolsables',
      '13. Non-refundable expenses',
      paragraph(
        'En ningún caso serán objeto de reembolso o devolución los siguientes conceptos:',
        'Under no circumstances will the following items be subject to refund or return:'
      ),
      bullets(
        [
          'Gastos personales de cualquier índole realizados durante el viaje o actividad.',
          'Propinas para guías, chóferes o personal de servicio.',
          'Alimentos, bebidas o compras no incluidos de origen en el paquete contratado.',
          'Entradas o actividades adicionales contratadas por cuenta del cliente fuera del programa.',
          'Gastos de transportación hacia el punto de encuentro inicial cuando este no forme parte del servicio contratado.',
          'Comisiones de pago, transferencias o diferencias cambiarias cobradas por instituciones bancarias.',
        ],
        [
          'Personal expenses of any kind incurred during the trip or activity.',
          'Tips for guides, drivers or service staff.',
          'Food, beverages or purchases not originally included in the contracted package.',
          'Additional tickets or activities contracted by the client outside the program.',
          'Transportation expenses to the initial meeting point when this is not part of the contracted service.',
          'Payment commissions, transfers or exchange rate differences charged by banking institutions.',
        ]
      )
    ),
    section(
      '14. Reembolsos por servicios de terceros',
      '14. Refunds for third-party services',
      paragraph(
        'Cuando un servicio sea prestado total o parcialmente por un proveedor externo, el reembolso estará sujeto a las condiciones y tiempos de respuesta de dicho tercero. Tu Guía Viajera actuará como intermediario para gestionar la solicitud de devolución, pero el tiempo de resolución final dependerá de los procesos internos de cada empresa proveedora.',
        'When a service is provided totally or partially by an external supplier, the refund will be subject to the conditions and response times of that third party. Tu Guía Viajera will act as an intermediary to manage the refund request, but the final resolution time will depend on the internal processes of each supplier company.'
      )
    ),
    section(
      '15. Método y tiempos de reembolso',
      '15. Refund method and times',
      paragraph(
        'Cuando proceda un reembolso, este se procesará preferentemente a través del mismo método de pago utilizado para la compra original (transferencia bancaria o tarjeta de crédito/débito).',
        'When a refund applies, it will preferably be processed through the same payment method used for the original purchase (bank transfer or credit/debit card).'
      ),
      paragraph(
        'El tiempo reflejado en la cuenta o estado de cuenta del cliente dependerá de la institución financiera o pasarela de pago correspondiente. Tu Guía Viajera no asumirá responsabilidad por los plazos de acreditación que dependan de los bancos emisores.',
        'The time reflected in the client’s account or statement will depend on the corresponding financial institution or payment gateway. Tu Guía Viajera will not assume responsibility for crediting periods that depend on the issuing banks.'
      )
    ),
    section(
      '16. Procedimiento para solicitudes de reembolso',
      '16. Procedure for refund requests',
      paragraph(
        'Toda solicitud formal de reembolso debe enviarse a: atencion@tuguiaviajera.com',
        'Any formal refund request must be sent to: atencion@tuguiaviajera.com'
      ),
      paragraph(
        'Una vez recibida la información completa, nuestro equipo evaluará el caso en un plazo razonable y notificará al cliente por escrito la procedencia de la solicitud, desglosando, en su caso, los montos a devolver y los conceptos aplicados.',
        'Once the complete information has been received, our team will evaluate the case within a reasonable period and notify the client in writing of the applicability of the request, detailing, where applicable, the amounts to be refunded and the concepts applied.'
      )
    ),
    section(
      '17. Modificaciones a esta política',
      '17. Changes to this policy',
      paragraph(
        'Tu Guía Viajera se reserva el derecho de modificar o actualizar la presente Política de Reembolsos y Devoluciones en cualquier momento para reflejar cambios en nuestras operaciones, alianzas con proveedores o actualizaciones legislativas.',
        'Tu Guía Viajera reserves the right to modify or update this Returns and Refund Policy at any time to reflect changes in our operations, supplier alliances or legislative updates.'
      ),
      paragraph(
        'La versión vigente estará disponible en todo momento para su consulta en: https://tuguiaviajera.com/',
        'The current version will be available for consultation at all times at: https://tuguiaviajera.com/'
      )
    ),
    section(
      '18. Aceptación',
      '18. Acceptance',
      paragraph(
        'Al realizar una reservación, anticipo o contratación con Tu Guía Viajera, el cliente reconoce haber leído, entendido y aceptado en su totalidad las condiciones de cancelación, modificación y reembolso aquí establecidas.',
        'By making a reservation, deposit or contracting with Tu Guía Viajera, the client acknowledges having read, understood and fully accepted the cancellation, modification and refund conditions established herein.'
      )
    ),
    section(
      '19. Canales de contacto',
      '19. Contact channels',
      paragraph(
        'Para cualquier duda, aclaración, solicitud de cancelación o gestión de reembolso, puedes ponerte en contacto con nuestro equipo de atención:',
        'For any question, clarification, cancellation request or refund management, you can contact our customer service team:'
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
