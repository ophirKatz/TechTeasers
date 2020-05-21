import { Model } from '../model';
import { Topic } from './topic.model';

export interface Teaser extends Model {
	name: string;
	author: string;
	topics: string[];
}