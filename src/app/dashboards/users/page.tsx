"use client"

import React, { HTMLProps } from 'react'
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Pagination } from '@/app/components/Pagination'


type User = {
  name: string
  avaSrc: string
  email: string
  registrationDate: string
}
const defaultData: User[] = [
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "just now"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "1 minus"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Yesterday"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Feb 2, 2024"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Feb 2, 2024"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "just now"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "1 minus"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Yesterday"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Feb 2, 2024"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Feb 2, 2024"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "just now"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "1 minus"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Yesterday"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Feb 2, 2024"
  },
  {
    name: 'Kate Morrison',
    avaSrc: '/ava1.jpg',
    email: 'brian@wwwg.com',
    registrationDate: "Feb 2, 2024"
  },
]

const Users = () => {  
  const [rowSelection, setRowSelection] = React.useState({})
  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        header: 'User',
        accessorKey: 'name',
        cell: info => info.getValue(),
      },
      {
        header: 'Email',
        accessorKey: 'email',
        cell: info => info.getValue(),
      },
      {
        header: 'Registration Date',
        accessorKey: 'registrationDate',
        cell: info => info.getValue(),
      },
    ],
    []
  )

  const [data, setData] = React.useState(() => defaultData)

  return (
    <div className="p-2 overflow-auto">
      <MyTable {...{
          data,
          columns,
        }}/>
    </div>
  )
}

function MyTable({
  data,
  columns,
}: {
  data: User[]
  columns: ColumnDef<User>[]
}) {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 1,
    pageSize: 5,
  })

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  })

  return (
    <>
      <table className="table-auto w-full">
        <thead className="">
          {table.getHeaderGroups().map(headerGroup => (
            <tr className="text-left border-b-2 border-[#f2f2f2]" key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border-l first:border-l-0 first:text-center px-2 pb-2">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
              <th className="px-2 pb-2 w-2"></th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-b border-[#f2f2f2] hover:bg-[#f7f9fb]">
              {row.getVisibleCells().map(cell => (
                <td className="px-2 pb-2 first:text-center" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="px-1 pb-2">
                <span className="btn-more">...</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center w-full justify-end mt-4 max-sm:justify-center">
        <button
          className="border rounded px-4 py-2 text-sm font-semibold hover:bg-slate-800 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-slate-800"
          onClick={() => table.setPageIndex(1)}
          disabled={table.getState().pagination.pageIndex === 1}
        >
          {'<<'}
        </button>
        <button
          className="border rounded px-4 py-2 text-sm font-semibold hover:bg-slate-800 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-slate-800"
          onClick={() => table.previousPage()}
          disabled={table.getState().pagination.pageIndex === 1}
        >
          {'<'}
        </button>
        <Pagination 
          currentPage={table.getState().pagination.pageIndex + 1}
          totalCount={table.getRowCount()}
          pageSize={table.getState().pagination.pageSize}
          onPageChange={(page) => table.setPageIndex(page)}
        />
        <button
          className="border rounded px-4 py-2 text-sm font-semibold hover:bg-slate-800 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-slate-800"
          onClick={() => table.nextPage()}
          disabled={table.getState().pagination.pageIndex === Math.ceil(table.getRowCount() / table.getState().pagination.pageSize) - 1}
        >
          {'>'}
        </button>
        <button
          className="border rounded px-4 py-2 text-sm font-semibold hover:bg-slate-800 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-slate-800"
          onClick={() => table.setPageIndex(Math.ceil(table.getRowCount() / table.getState().pagination.pageSize) - 1)}
          disabled={table.getState().pagination.pageIndex === Math.ceil(table.getRowCount() / table.getState().pagination.pageSize) - 1}
        >
          {'>>'}
        </button>
      </div>
    </>
  )
}

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate, rest.checked])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}

export default Users