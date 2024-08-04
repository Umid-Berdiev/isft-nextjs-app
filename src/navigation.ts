'use client'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { Pathnames } from 'next-intl/routing'
import { locales } from './i18n'

export const localePrefix = 'always'

// export const pathnames = {
//   '/': '/',
//   '/about': '/about',
//   '/activity': '/activity',
//   '/applicants': '/applicants',
//   '/contacts': '/contacts',
//   '/faq': '/faq',
//   '/news': '/news',
//   '/news/:slug': '/news/:slug',
//   '/students': '/students',
// } satisfies Pathnames<typeof locales>

export type LocationItem = {
  name: string
  path: string
  label: string
  children: LocationItem[]
}

export const locations: LocationItem[] = [
  // {
  //   name: 'home',
  //   path: '/',
  //   label: 'Home',
  //   children: []
  // },
  {
    name: 'about',
    path: '/about',
    label: 'About',
    children: []
  },
  {
    name: 'activity',
    path: '/activity',
    label: 'Activity',
    children: []
  },
  {
    name: 'applicants',
    path: '/applicants',
    label: 'Applicants',
    children: []
  },
  {
    name: 'contacts',
    path: '/contacts',
    label: 'Contacts',
    children: []
  },
  {
    name: 'faq',
    path: '/faq',
    label: 'FAQ',
    children: []
  },
  {
    name: 'news',
    path: '/news',
    label: 'News',
    children: [
      // {
      //   name: 'details',
      //   path: '/news/:slug',
      //   label: 'News details',
      //   children: []
      // }
    ]
  },
  {
    name: 'students',
    path: '/students',
    label: 'Students',
    children: []
  }
]

export const pathnames = locations.reduce((acc, location) => {
  acc[location.path] = location.path
  location.children.forEach(child => {
    acc[child.path] = child.path
  })
  return acc
}) as Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
