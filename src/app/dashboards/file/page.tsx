"use client"

import React, { HTMLProps } from 'react'
import {
  Column,
  ColumnDef,
  Table,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Pagination } from '@/app/components/Pagination'


type Person = {
  fileName: string
  avaSrc: string
  user: string
  fileSize: number
  uploadTime: string
}
const defaultData: Person[] = [
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Project tech requirements.pdf',
    avaSrc: '/ava1.jpg',
    user: 'Karat Okumus',
    fileSize: 5.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Dashboard-design.jpg',
    avaSrc: '/ava2.jpg',
    user: 'LanaSteiner',
    fileSize: 2.5,
    uploadTime: 'Just now'
  },
  {
    fileName: 'Create Project wirefarmes.xls',
    avaSrc: '/ava3.jpg',
    user: 'linsley',
    fileSize: 1,
    uploadTime: 'Just now'
  },
]

const Files = () => {  
  const [rowSelection, setRowSelection] = React.useState({})
  const columns = React.useMemo<ColumnDef<Person>[]>(
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
        header: 'File Name',
        accessorKey: 'fileName',
        cell: info => info.getValue(),
      },
      {
        header: 'User',
        accessorKey: 'user',
        cell: info => info.getValue(),
      },
      {
        header: 'File Size',
        accessorKey: 'fileSize',
        cell: info => info.getValue(),
      },
      {
        header: 'Upload Time',
        accessorKey: 'uploadTime',
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
  data: Person[]
  columns: ColumnDef<Person>[]
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

export default Files