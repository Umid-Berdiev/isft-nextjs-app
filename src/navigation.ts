'use client'
import { locales } from '@/i18n/request'
import { createNavigation } from 'next-intl/navigation'
import { Pathnames } from 'next-intl/routing'

export const localePrefix = 'always'

export type LocationItem = {
  name: string
  path: string
  label: string
  children: LocationItem[]
}

export const locations: LocationItem[] = [
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
}) as Pathnames<LocationItem>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({ locales, localePrefix, pathnames })
