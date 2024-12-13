import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../get-dictionary';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') as Locale;

  if (!locale) {
    return NextResponse.json({ error: 'Locale is required' }, { status: 400 });
  }

  try {
    const dictionary = await getDictionary(locale);
    return NextResponse.json(dictionary);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to load dictionary' }, { status: 500 });
  }
}
