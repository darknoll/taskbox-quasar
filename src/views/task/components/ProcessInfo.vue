<template>
  <q-tab-panel :name="name">
    <q-page>
      <q-list v-if="selectedUncompletedTask">
        <info-item
          infoName="流程节点"
          :infoValue="selectedUncompletedTask.name"
        />
        <q-separator inset />
        <info-item
          infoName="描述"
          :infoValue="selectedUncompletedTask.description"
        />
        <q-separator inset />
        <info-item
          infoName="所属流程"
          :infoValue="selectedUncompletedTask.wfp_name"
        />
        <q-separator inset />
        <info-item
          infoName="所属模板"
          :infoValue="selectedUncompletedTask.wft_name"
        />
        <q-separator inset />
        <info-item
          infoName="发件人"
          :infoValue="selectedUncompletedTask.task_sender"
        />
        <q-separator inset />
        <info-item
          infoName="责任人"
          :infoValue="selectedUncompletedTask.participant"
        />
        <q-separator inset />
        <info-item
          infoName="发送时间"
          :infoValue="
            getDateTimeFromStamp(selectedUncompletedTask.creationdate)
          "
        />
        <q-separator inset />
        <info-item
          infoName="接收时间"
          :infoValue="getDateTimeFromStamp(selectedUncompletedTask.start_time)"
        />
        <q-separator inset />
        <q-item>
          <q-item-section>
            <q-item-label>是否代理</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle disable v-model="selectedUncompletedTask.allow_agent" />
          </q-item-section>
        </q-item>
        <q-separator inset />
        <info-item
          infoName="优先级"
          :infoValue="getPriority(selectedUncompletedTask.priority)"
        />
        <q-separator inset />
        <info-item
          infoName="执行人"
          :infoValue="selectedUncompletedTask.lastmodifier"
        />
        <q-separator inset />
        <q-item>
          <q-item-section>
            <q-item-label>是否抄送</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle disable v-model="selectedUncompletedTask.cc_flag" />
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item>
          <q-item-section>
            <q-item-label>是否超时</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle
              disable
              v-model="selectedUncompletedTask.notify_number_overdue"
            />
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item>
          <q-item-section>
            <q-item-label>是否预警</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle
              disable
              v-model="selectedUncompletedTask.notify_flag_in_advance"
            />
          </q-item-section>
        </q-item>
        <q-separator inset />
        <info-item
          infoName="提交模式"
          :infoValue="selectedUncompletedTask.submit_mode"
        />
        <q-separator inset />
        <info-item
          infoName="完成时间"
          :infoValue="getDateTimeFromStamp(selectedUncompletedTask.final_time)"
        />
        <q-separator inset />
        <info-item
          infoName="要求完成时间"
          :infoValue="getDateTimeFromStamp(selectedUncompletedTask.end_time)"
        />
        <q-separator inset class="q-mb-xs" />
      </q-list>
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page>
  </q-tab-panel>
</template>

<script>
import { mapState } from 'vuex';
import { getDateTimeFromStamp, getPriority } from '@/utils/helper';
import InfoItem from '../components/InfoItem';
export default {
  name: 'ProcessInfo',
  components: {
    InfoItem
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('task', ['selectedUncompletedTask'])
  },
  methods: {
    getDateTimeFromStamp,
    getPriority
  }
};
</script>
