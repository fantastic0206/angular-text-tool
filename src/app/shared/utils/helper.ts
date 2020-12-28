import { HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs';
/**
 * Makes params from form data
 * @param formData
 * @returns
 */
export function makeParamsFromFormData(formData: object) {
	let params = new HttpParams();
	if (Object.keys(formData).length) {
		Object.keys(formData).forEach((key) => {
			if (Array.isArray(formData[key])) {
				formData[key].forEach((k) => {
					params = params.append(key + '[]', k);
				});
			} else {
				params = params.append(key, formData[key]);
			}
		});
	}
	return params;
}

export function unSubAllPrevious(subscription: Subscription[]) {
	if (subscription.length) {
		subscription.forEach((sub) => {
			sub.unsubscribe();
		});
	}
}

export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || (( window.innerWidth <= 800 ) && ( window.innerHeight <= 900 ));
}
