'use client'
import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Separator } from '@radix-ui/react-separator'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

const Cart = () => {
  const itemCount = 0

  const fee = 1

  return (
    <Sheet>
      <SheetTrigger className='  group -m-2 flex items-center p-2'>
        <ShoppingCart
          className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-green-400'
          aria-hidden='true'
        />
        <span className='ml-2 text-sm font-medium text-green-700 group-hover:text-green-400'>
          0
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle className='text-green-600'>Cart </SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              {/*TODO: Cart logic */}
              Cart Items
            </div>
            <div className='space-y-4 pr-6'>
              <Separator />
              <div className='space-y-1.5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>Transaction fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    className={buttonVariants({
                      className: 'w-full',
                    })}
                    href='/cart'
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              className='relative mb-4 h-60 w-60 text-muted-foreground'
              aria-hidden='true'
            >
              <Image src='/hippo-empty-cart.png' fill alt='Empty cart' />
            </div>
            <div className='text-xl text-green-600 font-semibold'>
              Your cart is empty
            </div>
            <SheetTrigger>
              <Link
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foregrounded',
                })}
                href='/products'
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
export default Cart
