import moment from 'moment-jalaali';
import type { Event } from '../../../types/calendar';

export const generateMetadata = (events: Event[]): string => `
  <metadata>
    <rdf:RDF>
      <rdf:Description>
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
        <dc:title>Persian Calendar</dc:title>
        <dc:date>${moment().format()}</dc:date>
        <dc:creator>StackBlitz Calendar App</dc:creator>
      </rdf:Description>
    </rdf:RDF>
    <ai:events>${JSON.stringify(events)}</ai:events>
  </metadata>`;