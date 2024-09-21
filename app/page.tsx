import Image from 'next/image';
import Layout from './dashboard/layout';
import { redirect } from 'next/navigation';

export default function Home() {
	redirect('/dashboard'); // Automatically redirects to /dashboard
	return null;
}
