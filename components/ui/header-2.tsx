'use client';

import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { ThemeToggleModern } from '@/components/ui/theme-toggle-modern';
import { GraduationCap } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const aboutLinks = [
    {
      title: 'Tentang Kami',
      href: '/about',
      description: 'Profil, visi, dan misi SMK Bina Mandiri',
    },
    {
      title: 'Sambutan Kepala Sekolah',
      href: '/about/headmaster',
      description: 'Pesan dan harapan dari Kepala Sekolah',
    },
    {
      title: 'HUBIN',
      href: '/about/hubin',
      description: 'Hubungan Industri dan kerjasama DUDI',
    },
  ];

  const departmentLinks = [
    {
      title: 'TKJ',
      href: '/departments/tkj',
      description: 'Teknik Komputer dan Jaringan',
    },
    {
      title: 'TSM',
      href: '/departments/tsm',
      description: 'Teknik Sepeda Motor',
    },
    {
      title: 'TKR',
      href: '/departments/tkr',
      description: 'Teknik Kendaraan Ringan',
    },
  ];

  const simpleLinks = [
    {
      label: 'Beranda',
      href: '/',
    },
    {
      label: 'PPDB',
      href: '/spmb',
    },
    {
      label: 'Kontak',
      href: '/contact',
    },
  ];

  React.useEffect(() => {
    if (open) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll
      document.body.style.overflow = '';
    }

    // Cleanup when component unmounts (important for Next.js)
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
        {
          'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-5xl md:shadow':
            scrolled && !open,
          'bg-background/90': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          },
        )}
      >
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">SMK Bina Mandiri</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Beranda */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      Beranda
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Tentang Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tentang</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {aboutLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Jurusan Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Jurusan</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/departments"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Semua Jurusan</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary-foreground">
                              Lihat semua program keahlian
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {departmentLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* PPDB */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/spmb" className={navigationMenuTriggerStyle()}>
                      PPDB
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Kontak */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className={navigationMenuTriggerStyle()}>
                      Kontak
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggleModern className="ml-2" />
            <Button asChild variant="outline" size="sm">
              <Link href="/sign-in">Masuk</Link>
            </Button>
            <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90">
              <Link href="/spmb">Daftar</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggleModern />
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
            >
              <MenuToggleIcon open={open} className="size-5" duration={300} />
            </Button>
          </div>
        </nav>

      <div
        className={cn(
          'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4',
          )}
        >
          <div className="grid gap-y-2">
            {/* Beranda */}
            <Link
              className={buttonVariants({
                variant: 'ghost',
                className: 'justify-start',
              })}
              href="/"
              onClick={() => setOpen(false)}
            >
              Beranda
            </Link>

            {/* Tentang Section */}
            <div className="space-y-1">
              <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">Tentang</div>
              {aboutLinks.map((link) => (
                <Link
                  key={link.title}
                  className={buttonVariants({
                    variant: 'ghost',
                    className: 'justify-start pl-8',
                  })}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Jurusan Section */}
            <div className="space-y-1">
              <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">Jurusan</div>
              <Link
                className={buttonVariants({
                  variant: 'ghost',
                  className: 'justify-start pl-8',
                })}
                href="/departments"
                onClick={() => setOpen(false)}
              >
                Semua Jurusan
              </Link>
              {departmentLinks.map((link) => (
                <Link
                  key={link.title}
                  className={buttonVariants({
                    variant: 'ghost',
                    className: 'justify-start pl-8',
                  })}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Simple Links */}
            {simpleLinks.map((link) => (
              <Link
                key={link.label}
                className={buttonVariants({
                  variant: 'ghost',
                  className: 'justify-start',
                })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggleModern />
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/sign-in" onClick={() => setOpen(false)}>
                Masuk
              </Link>
            </Button>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
              <Link href="/spmb" onClick={() => setOpen(false)}>
                Daftar Sekarang
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
