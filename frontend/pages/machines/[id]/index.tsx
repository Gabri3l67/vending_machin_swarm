// 'use client'

import { Button, Link } from "@nextui-org/react"

import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { getMachineSales } from "@/Sale/SaleController"
import { Sale } from "@/Sale/Sale"
import { SaleResponse } from "@/Sale/SaleResponse"

export default function Page(){
    const router = useRouter() 
    const [ sales, setSales ] = useState<SaleResponse[]>([])
    useEffect(() => {
        if(!router.query.id){
            return
        }
        
        getMachineSales(Number(router.query.id)).then((res) => {
            setSales(res)
        })
    }, [router.query.id])

    return (
        <>
            <p> Machine: {router.query.id}</p>
            <Button
                as={Link}
                href={`/assign-products/${router.query.id}`}
            >
                Asignar Productos
            </Button>

            <div>
                <h1>Ventas</h1>
                {
                    sales && sales.length > 0 ? 
                    <div>{sales.map((sale) => (
                        <div key={sale.id} className="outline outline-2 outline-slate-300 rounded-lg p-2 mt-4 bg-slate-50 hover:shadow-xl transition" > 
                            <div>{sale.product.name}</div>
                            <div>Fecha: {new Date(sale.date).toLocaleString()}</div>
                            <div>${sale.product.price}</div>
                        </div>
                    ))}</div>
                    :
                    <div>Esta maquina aun no tiene ventas</div>
                }
            </div>
        </>
        
    )
}