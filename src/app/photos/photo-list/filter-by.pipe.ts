import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
  name: 'filterBy'
})
export class FilterBy implements PipeTransform {
  transform(photos: Photo[], property: string, filter: string) {
    return !filter
      ? photos
      : photos.filter(
          photo => photo[property]
            .toLowerCase()
            .includes(
              filter
                .trim()
                .toLowerCase()
          )
    );
  }
}
