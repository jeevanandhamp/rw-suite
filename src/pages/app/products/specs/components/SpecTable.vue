<template>
  <n-card> 
    <n-space vertical :size="20">
      <n-data-table
        :columns="columns"
        :data="data"
        size="large"
        :scroll-x="1800"
        :row-key="(row) => row['sku']"
        :max-height="'80vh'"
      />
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { defineComponent, ref, h } from 'vue'
import { NDataTable, NSpace, NCard, NButton, NTag } from 'naive-ui';
import type { DataTableColumns, DataTableRowKey } from 'naive-ui'

type RowData = {
  key: number,
  sku: string,
  varnished: number,
  freezer_safe: number,
  shape: number,
  color: number,
  handwash_only: number,
  length: number,
  NFS_Certification: number,
  Type: number,
  Type_one: number,
  Type_two: number
  }

function renderTag(value:any) {
  let displayText:string = "-- --";
  type ntagStyle = "default" | "error" | "primary" | "info" | "success" | "warning";

  let styleType:ntagStyle = "default";

  if(value === 0) {
    displayText = "Hidden";
    styleType = "warning";
  } else if(value === 1) {
    displayText = "Visible";
    styleType = "success";
  } else if(value === -1) {
    displayText = "Missing";
    styleType = "error";
  }
  return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: styleType,
              bordered: false
            },
            {
              default: () =>  displayText
            }
          )
}
const columns:DataTableColumns<RowData> = [
  {
    type: 'selection',
    fixed: 'left'
  },
  {
    title: 'sku',
    key: 'sku',
    sorter: {
      compare: (a:any, b:any) => a.sku - b.sku,
      multiple: 3
    },
    fixed: 'left',
    minWidth: 200
  },
  {
    title: 'varnished',
    key: 'varnished',
    align: "center",
    sorter: (row1:any, row2:any) => row1.varnished - row2.varnished,
    render: (_, index) => {
      return renderTag(_.varnished);
    }
  },{
    title: 'varnished',
    key: 'varnished',
    align: "center",
    sorter: (row1:any, row2:any) => row1.varnished - row2.varnished,
    render: (_, index) => {
      return renderTag(_.varnished);
    }
  },
  {
    title: 'freezer_safe  ',
    key: 'freezer_safe',
    defaultSortOrder: false,
    render: (_, index) => {
      return renderTag(_.freezer_safe);
    }
  },
  {
    title: 'shape',
    defaultSortOrder: false,
    key: 'shape',
    render: (_, index) => {
      return renderTag(_.shape);
    }
  },
  {
    title: 'color ',
    defaultSortOrder: false,
    key: 'color',
    render: (_, index) => {
      return renderTag(_.color);
    }
  },
  {
    title: 'handwash_only',
    key: 'handwash_only',
    render: (_, index) => {
      return renderTag(_.handwash_only);
    }

    // filter (value:any, row:any) {
    //   return ~row.address.indexOf(value)
    // }
  },
  {
    title: 'color ',
    defaultSortOrder: false,
    key: 'color',
    render: (_, index) => {
      return renderTag(_.color);
    }
  },
  {
    title: 'length  ',
    defaultSortOrder: false,
    key: 'length ',
    render: (_, index) => {
      return renderTag(_.length);
    }
  },
  {
    title: 'NFS_Certification ',
    defaultSortOrder: false,
    key: 'NFS_Certification',
    render: (_, index) => {
      return renderTag(_.NFS_Certification);
    }
  },
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  },
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type_one',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  },
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type_two',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  },
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type_two',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  },
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type_two',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  },
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type_two',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  } ,
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type_two',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  } ,
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type_two',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  } ,
  {
    title: 'Type ',
    defaultSortOrder: false,
    key: 'Type_two',
    render: (_, index) => {
      return renderTag(_.Type);
    }
  }  
]

const data = [
  {
    key: 0,
    sku: 'RW898999999',
    varnished: 1,
    freezer_safe: 2,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: -1,
    NFS_Certification: 2,
    Type: 2,
    Type_one:-1,
    Type_two:1
  
    
  },
  {
    key: 0,
    sku: 'RW898999997',
    varnished: 2,
    freezer_safe: 2,
    shape: 1,
    color: 0,
    handwash_only: -1,
    length: 2,
    NFS_Certification: 1,
    Type: 0,
    Type_one:-1,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999992',
    varnished: -1,
    freezer_safe: 2,
    shape: 2,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 0,
    Type: 2,
    Type_one:-1,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999993',
    varnished: 0,
    freezer_safe: 2,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 2,
    Type: 1,
    Type_one:-1,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999993',
    varnished: 2,
    freezer_safe: 1,
    shape: 0,
    color: -1,
    handwash_only: 0,
    length: 1,
    NFS_Certification: -1,
    Type: 0,
    Type_one:2,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999993',
    varnished: 0,
    freezer_safe: 2,
    shape: 0,
    color: 0,
    handwash_only: -1,
    length: 1,
    NFS_Certification: 2,
    Type: -1,
    Type_one:-1,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999993',
    varnished: -1,
    freezer_safe: 0,
    shape: 0,
    color: 0,
    handwash_only: -1,
    length: 1,
    NFS_Certification: 2,
    Type: 2,
    Type_one:2,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999993',
    varnished: 2,
    freezer_safe: 2,
    shape: 0,
    color: 0,
    handwash_only: -1,
    length: 1,
    NFS_Certification: 2,
    Type: 2,
    Type_one:-1,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999999',
    varnished: 1,
    freezer_safe: -1,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: -1,
    NFS_Certification: 2,
    Type: 2,
    Type_one:-1,
    Type_two:1
    
  },
  {
    key: 0,
    sku: 'RW898999997',
    varnished: 2,
    freezer_safe: 2,
    shape: 1,
    color: 0,
    handwash_only: -1,
    length: 2,
    NFS_Certification: 1,
    Type: 0,
    Type_one:-1,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999992',
    varnished: 1,
    freezer_safe: 2,
    shape: 2,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 0,
    Type: 2,
    Type_one:-1,
    Type_two:1
  },
  {
    key: 0,
    sku: 'RW898999999',
    varnished: -1,
    freezer_safe: 0,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: -1,
    NFS_Certification: 2,
    Type: 2,
    Type_one:-1,
    Type_two:1
    
  },
  {
    key: 0,
    sku: 'RW898999997',
    varnished: 2,
    freezer_safe: 0,
    shape: 1,
    color: 0,
    handwash_only: -1,
    length: 2,
    NFS_Certification: 1,
    Type: 0
  },
  {
    key: 0,
    sku: 'RW898999992',
    varnished: 1,
    freezer_safe: 2,
    shape: 2,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 0,
    Type: 2
  },
  {
    key: 0,
    sku: 'RW898999999',
    varnished: 0,
    freezer_safe: 1,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: -1,
    NFS_Certification: 2,
    Type: 2
    
  },
  {
    key: 0,
    sku: 'RW898999997',
    varnished: 0,
    freezer_safe: 1,
    shape: 1,
    color: 0,
    handwash_only: -1,
    length: 2,
    NFS_Certification: 1,
    Type: 0
  },
  {
    key: 0,
    sku: 'RW898999992',
    varnished: -1,
    freezer_safe: 1,
    shape: 2,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 0,
    Type: 2
  },
  {
    key: 0,
    sku: 'RW898999999',
    varnished: 1,
    freezer_safe: 1,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: -1,
    NFS_Certification: 2,
    Type: 2
    
  },
  {
    key: 0,
    sku: 'RW898999997',
    varnished: -1,
    freezer_safe: -1,
    shape: 1,
    color: 0,
    handwash_only: -1,
    length: 2,
    NFS_Certification: 1,
    Type: 0
  },
  {
    key: 0,
    sku: 'RW898999992',
    varnished: 1,
    freezer_safe: 2,
    shape: 2,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 0,
    Type: 2
  },
  {
    key: 0,
    sku: 'RW898999999',
    varnished: 2,
    freezer_safe: 0,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: -1,
    NFS_Certification: 2,
    Type: 2
    
  },
  {
    key: 0,
    sku: 'RW898999997',
    varnished: -1,
    freezer_safe: 2,
    shape: 1,
    color: 0,
    handwash_only: -1,
    length: 2,
    NFS_Certification: 1,
    Type: 0
  },
  {
    key: 0,
    sku: 'RW898999992',
    varnished: 1,
    freezer_safe: 0,
    shape: 2,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 0,
    Type: 2
  },
  {
    key: 0,
    sku: 'RW898999999',
    varnished: 2,
    freezer_safe: 1,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: -1,
    NFS_Certification: 2,
    Type: 2
    
  },
  {
    key: 0,
    sku: 'RW898999997',
    varnished: 0,
    freezer_safe: 1,
    shape: 1,
    color: 0,
    handwash_only: -1,
    length: 2,
    NFS_Certification: 1,
    Type: 0
  },
  {
    key: 0,
    sku: 'RW898999992',
    varnished: -1,
    freezer_safe: -1,
    shape: 2,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 0,
    Type: 2
  },
  {
    key: 0,
    sku: 'RW898999999',
    varnished: 1,
    freezer_safe: 0,
    shape: 0,
    color: -1,
    handwash_only: 1,
    length: -1,
    NFS_Certification: 2,
    Type: 2
    
  },
  {
    key: 0,
    sku: 'RW898999997',
    varnished: 2,
    freezer_safe: 2,
    shape: 1,
    color: 0,
    handwash_only: -1,
    length: 2,
    NFS_Certification: 1,
    Type: 0
  },
  {
    key: 0,
    sku: 'RW898999992',
    varnished: -1,
    freezer_safe: 2,
    shape: 2,
    color: -1,
    handwash_only: 1,
    length: 0,
    NFS_Certification: 0,
    Type: 2
  },
  {
    key: 0,
    sku: 'RW898999993',
    varnished: 2,
    freezer_safe: 2,
    shape: 0,
    color: 0,
    handwash_only: -1,
    length: 1,
    NFS_Certification: 2,
    Type: 2
  }
]


  //   const dataTableInstRef = ref(null)
  const dataTableInstRef = ref(Array<RowData>);

function filterAddress () {
  console.log(dataTableInstRef.value);
  // dataTableInstRef.value.filter({
  //   address: ['London']
  // })
};
function  sortName () {
  // dataTableInstRef.value.sort('name', 'ascend');
};
function clearFilters () {
  // dataTableInstRef.value.filter(null);
};
function clearSorter () {
  // dataTableInstRef.value.sort(null);
};
  
   

</script>
<style scoped>

title{
  background-color: rgb(26, 4, 4);
}
table thead {
  background: black;
}
</style>
